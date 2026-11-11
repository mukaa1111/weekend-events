# 자동 수집 루틴 (ROUTINE)

클라우드에서 월·목 아침 7시에 돌아가는 "행사 자동 수집" 예약의 설정을 적어 둔 문서예요.
**다른 Claude 계정으로 옮길 때** 이 문서를 보여주고 "ROUTINE.md대로 루틴 다시 만들어줘"라고 하면 돼요.

## 어디에 뭐가 묶여 있나
| 것 | 어느 계정에 속하나 | 계정 바뀌면 |
|---|---|---|
| 프로젝트 파일 (이 폴더) | 내 PC | 그대로 |
| GitHub 저장소·폰 주소 (mukaa1111/weekend-events) | 내 GitHub 계정 | 그대로. Claude 계정과 무관 |
| 자동 수집 루틴 | Claude 계정 (팀 계정) | **새 계정에서 다시 만들기** (아래 설정 그대로) |
| Claude ↔ GitHub 연결 | Claude 계정 | 새 계정에서 다시 연결 + Claude GitHub App 설치 |
| 클라우드 환경 네트워크 설정 | Claude 계정 | 새 계정에서 다시 설정 |

## 루틴 설정
- **이름**: 주말 뭐하지? 행사 자동 수집 (월·목 07:00)
- **시간**: 매주 월요일·목요일 07:00 (한국) = cron `0 22 * * 0,3` (UTC)
- **모델**: claude-sonnet-5-5
- **저장소**: https://github.com/mukaa1111/weekend-events
- **도구**: Bash, Read, Write, Edit, Glob, Grep, WebSearch, WebFetch
- **환경 변수**(클라우드 환경 설정에 직접 입력): `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` → 설정법은 `docs/TELEGRAM.md`
- **현재 루틴 주소**: https://claude.ai/code/routines/trig_01KxcHeuUARbcQ3ZKNuaYTAh (팀 계정)

## 두 번째 루틴: 저녁 회신 반영 (2026-11-09 추가)
- **이름**: 주말 뭐하지? 회신 반영 (매일 21:00) · **시간**: 매일 21:00 (한국) = cron `0 12 * * *` · **모델**: claude-sonnet-5-5 · 도구·저장소·환경 변수는 아침 루틴과 같음
- **하는 일**: 수집은 안 하고, 봇에게 보낸 내 답장(행사명, "○○ 빼줘" 등)만 읽어 행사 목록에 반영하고 "💬 회신 반영" 확인 메시지를 보낸다. 아침 수집 루틴은 그대로 두었다(답장은 이 루틴만 처리). 텔레그램이 안 받아 간 메시지를 24시간만 보관해서 매일 돌아야 한다.
- **지시문**: `docs/routine-prompt-evening.txt`. 규칙 본문은 `docs/COLLECT.md` 7절.
- **현재 루틴 주소**: https://claude.ai/code/routines/trig_01ULJVVdobwpSBcHaJkGsaVW (팀 계정, 2026-11-09 생성)

## 세 번째 루틴: 아침 접수 알림 (2026-11-11 추가)
- **이름**: 주말 뭐하지? 접수 알림 (매일 07:30) · **시간**: 매일 07:30 (한국) = cron `30 22 * * *` · **모델**: claude-sonnet-5-5 · 도구: Bash, Read · 저장소·환경 변수는 같음
- **하는 일**: `node scripts/apply_alert.js`만 실행한다. 오늘 접수가 **시작**되거나 **마감**되는 행사가 있으면 "⏰ 오늘 접수 알림" 메시지를 보내고, 없으면 아무것도 안 보낸다. 웹을 읽지 않고 파일도 안 바꿔서 몇 초면 끝난다. 월·목에는 07:00 수집이 끝난 뒤라 새 목록 기준으로 알린다.
- **지시문**: `docs/routine-prompt-alert.txt`
- **현재 루틴 주소**: (만든 뒤 적음)

## 새 계정에서 다시 만들 때 순서
1. 새 계정으로 https://claude.ai/code 로그인 → 아래쪽 "저장소"에서 GitHub 연결
2. https://github.com/apps/claude/installations/select_target 에서 mukaa1111 선택 → weekend-events 저장소 허용 → Install
3. claude.ai/code 환경(Default) 설정에서 환경 변수 2개(`docs/TELEGRAM.md` 4번)를 넣고, 네트워크 접근을 "전체" 또는 아래 도메인 허용으로 바꾸기
   (science.go.kr, daejeon.go.kr, sejong.go.kr, sjcf.or.kr, cheongju.museum.go.kr, gongju.museum.go.kr, nonsan.go.kr, uppity.co.kr, mcst.go.kr, festival.seoul.go.kr, museum.go.kr, sciencecenter.go.kr, leeungnomuseum.or.kr, cheongju.go.kr, sjac.or.kr)
4. Claude Code에게 "docs/ROUTINE.md대로 루틴 만들어줘"라고 말하기 — **루틴 3개**: 아침 수집, 저녁 회신 반영, 접수 알림. 맨 아래 "루틴 지시문" 표와 한 문단을 그대로 씀
5. 만든 뒤 한 번 "지금 실행"해서 GitHub에 새 커밋이 올라오는지 확인

## 팀 계정이 끝날 때 정리 (연결 끊기)
1. https://claude.ai/code/routines 에서 루틴 3개(아침 수집·저녁 회신 반영·접수 알림) 삭제 (삭제는 직접 해야 함)
2. claude.ai 설정 → 커넥터에서 GitHub 연결 해제
3. https://github.com/settings/installations 에서 "Claude" 앱 중 팀 계정으로 설치된 것 제거
4. 개인 계정에서 위 "새 계정에서 다시 만들 때 순서"대로 다시 연결

## 시험 실행 기록
| 날짜 | 결과 |
|---|---|
| 2026-10-16 1차 | 돌아갔으나 push 403(Claude GitHub App 미설치) + 한국 사이트 DNS 실패(환경 네트워크 제한) |
| 2026-10-16 2차 | 네트워크 해결 확인(잘쓸레터 읽힘). 변경 0건이라 커밋 안 함 → push 권한 미검증. 출처를 1곳만 열어봄 → 지시문 강화 |
| 2026-10-16 3차 | **성공.** 출처 24곳 전부 시도(○11 △6 ×7, 503은 사이트 쪽 일시 차단), 추가 1건·갱신 1건(강경젓갈축제 10/18 취소 반영), 검사 ok 40, GitHub 커밋 dc08b95 푸시. 소요 1분 43초 |
| 2026-10-16 4차 | **텔레그램 알림 성공.** 환경 변수 입력 후 실행 → 수집·푸시 후 폰으로 요약 메시지 도착 확인 |
| 2026-10-19 (첫 자동 실행) | 월요일 07:00 자동 실행 성공. 추가 1·갱신 1·삭제 5, 텔레그램 도착 |
| 2026-10-19 (지시문 변경) | 접수 시작·마감일을 `applyStart`/`deadline`으로 적고, 알림에 '예약 서두르기(7일 안)' 묶음 추가 |
| 2026-11-02 (지시문 변경) | OK예약서비스 메뉴 확장: 체험·교육·강좌(접수중/접수대기), 공연/전시 목록. 접수기간을 applyStart/deadline로 옮기는 규칙 |
| 2026-11-11 (구조 변경) | 루틴 지시문을 저장소 파일(`docs/routine-prompt-*.txt`)로 옮기고 루틴에는 "그 파일을 읽고 수행" 한 문단만 둠. 접수 알림 루틴(매일 07:30) 추가. "갔어 ○○" 답장으로 다녀온 곳 기록, 월요일 알림에 기록 안내 한 줄 |
| 2026-11-11 (지시문 변경) | 추천 3곳(`window.PICKS`)을 수집 때마다 다시 고르고 텔레그램 추천과 같게 함. 마감 행사는 `closed: true`로 표시. 검사 명령은 COLLECT.md 5절 한 곳으로 모음 |
| 2026-11-09 (루틴 추가) | 텔레그램 회신 처리: 저녁 21:00 회신 반영 루틴 신설 (아침 수집 지시문은 그대로) |
| 2026-10-29 (지시문 변경) | 대덕대청호물결축제 누락 원인 수정: 문체부 DB 지역 필터 주소, 검색형 출처(`type: "검색"`), 대전 균형 규칙, 요약에 지역별 건수 |

## 루틴이 안 되는 요금제라면 (대안)
- **수동**: PC에서 Claude Code를 열고 "이번 주 행사 수집해줘" → 수집 후 "GitHub에 올려줘". 5~10분.
- **PC 예약**: Windows 작업 스케줄러로 월·목 7시에 PC가 켜져 있을 때 자동 실행 (PC가 꺼져 있으면 안 돌아감). 필요하면 "PC 예약으로 바꿔줘"라고 요청.

## 루틴 지시문 (2026-11-11부터: 짧은 한 문단 + 저장소 안의 파일)
루틴에 넣는 지시문은 아래 **한 문단**뿐이에요. 실제 지시 내용은 저장소 안의 파일에 있고, 루틴이 돌 때마다 그 파일을 읽어요.
그래서 지시를 바꾸고 싶으면 파일만 고쳐서 올리면 되고, 루틴 설정은 다시 건드릴 필요가 없어요. 새 계정으로 옮길 때도 이 한 문단만 붙여넣으면 돼요.

| 루틴 | 시간 (한국) | cron (UTC) | ○○ 자리에 넣을 파일 |
|---|---|---|---|
| 아침 수집 | 월·목 07:00 | `0 22 * * 0,3` | `docs/routine-prompt-morning.txt` |
| 저녁 회신 반영 | 매일 21:00 | `0 12 * * *` | `docs/routine-prompt-evening.txt` |
| 접수 알림 | 매일 07:30 | `30 22 * * *` | `docs/routine-prompt-alert.txt` |

```
이 저장소(weekend-events)의 `docs/routine-prompt-○○.txt` 파일을 Read 도구로 끝까지 읽고, 거기 적힌 지시를 처음부터 끝까지 그대로 수행한다. 그 파일이 이 루틴의 지시문 전체다. 파일이 없거나 비어 있으면 아무것도 바꾸지 말고 "지시문 파일 없음"이라고만 답하고 끝낸다. 모든 글은 한국어로 쓴다. 텔레그램 토큰·chat id 값은 절대 출력하거나 파일에 쓰지 않는다.
```
(○○ 자리를 morning / evening / alert 로 바꿔서 루틴마다 하나씩)
