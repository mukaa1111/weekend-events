// 오늘 접수가 시작되거나 마감되는 행사를 텔레그램으로 알려줍니다. (매일 아침 07:30 "접수 알림" 루틴이 실행)
//
// 사용법:  node scripts/apply_alert.js [--dry-run] [--date 2026-11-13] [--test]
//   - data/events.js 에서 applyStart(접수 시작일) 또는 deadline(접수 마감일)이 "오늘(한국 시간)"인 행사를 찾습니다.
//   - 예약이 필요 없는 행사, closed: true(이미 마감)인 행사는 빼고 알립니다.
//   - 알릴 게 있으면 scripts/telegram.sh 로 메시지 1통을 보냅니다. 없으면 아무것도 보내지 않습니다.
//   - --dry-run : 보내지 않고 메시지만 출력
//   - --date    : 오늘 대신 그 날짜 기준으로 계산 (시험용)
//   - --test    : 메시지 첫 줄에 [시험] 표시
//   - 웹을 읽거나 파일을 바꾸지 않습니다. 토큰은 telegram.sh 가 환경 변수에서 읽습니다.
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFileSync } = require("child_process");

const ROOT = path.dirname(__dirname);
const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const test = args.includes("--test");
const di = args.indexOf("--date");
const today = di >= 0 && args[di + 1] ? args[di + 1] : new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);
if (!/^\d{4}-\d{2}-\d{2}$/.test(today)) { console.log("apply-alert: 날짜 형식 오류 " + today); process.exit(1); }

const w = {};
vm.createContext(w);
vm.runInContext(fs.readFileSync(path.join(ROOT, "data", "events.js"), "utf8").replace(/window\./g, "this."), w);
const events = w.EVENTS || [];

const DAY = "일월화수목금토";
function md(d) { const p = d.split("-"); const x = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); return (+p[1]) + "/" + (+p[2]) + "(" + DAY[x.getUTCDay()] + ")"; }
function when(e) { return e.start === e.end ? md(e.start) : md(e.start) + "~" + md(e.end); }
function line(e, head) {
  return "- " + head + e.title + " (행사 " + when(e) + ")" +
    (e.cost ? ", " + e.cost : "") + (e.applyNote ? "\n  접수: " + e.applyNote : "") + (e.url ? "\n  " + link(e.url) : "");
}
// 한글이 섞인 주소는 텔레그램에서 링크가 끊기지 않게 인코딩
function link(u) { return /[^\x00-\x7F]/.test(u) ? encodeURI(u) : u;
}

const open = events.filter(e => e.reservation && e.closed !== true && e.end >= today);
const starts = open.filter(e => e.applyStart === today)
  .sort((a, b) => (a.applyTime || "99").localeCompare(b.applyTime || "99"));
const ends = open.filter(e => e.deadline === today && e.applyStart !== today);

if (!starts.length && !ends.length) {
  console.log("apply-alert: " + today + " 오늘 알릴 접수 없음 (보내지 않음)");
  process.exit(0);
}

let msg = (test ? "[시험] " : "") + "⏰ 오늘 접수 알림 " + md(today) + "\n";
if (starts.length) {
  msg += "\n🟢 오늘 접수 시작 (인기 프로그램은 열리자마자 마감돼요)\n" +
    starts.map(e => line(e, e.applyTime ? e.applyTime + " " : "")).join("\n") + "\n";
}
if (ends.length) {
  msg += "\n🔴 오늘 접수 마감\n" + ends.map(e => line(e, "")).join("\n") + "\n";
}
msg += "\n전체 보기: https://mukaa1111.github.io/weekend-events/";

if (dry) {
  console.log(msg);
  console.log("apply-alert: dry-run (시작 " + starts.length + "건, 마감 " + ends.length + "건, 보내지 않음)");
  process.exit(0);
}
try {
  const out = execFileSync("bash", [path.join(ROOT, "scripts", "telegram.sh"), msg], { encoding: "utf8" });
  console.log("apply-alert: " + today + " 시작 " + starts.length + "건, 마감 " + ends.length + "건 → " + out.trim());
} catch (err) {
  console.log("apply-alert: 전송 실패 → " + String((err.stdout || "") + (err.stderr || "") || err.message).trim().slice(0, 300));
  process.exit(1);
}
