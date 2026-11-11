// 행사 데이터. 중괄호 한 묶음이 행사 1건입니다.
// 날짜는 "연-월-일" 형식. 하루짜리 행사는 start와 end를 같게 적습니다.
//
// region   : "대전" | "근교" | "전국"
// cost     : "무료" | "유료" | "일부 유료"
// tags     : "과학"(과학·만들기·코딩) "야외"(운동·야외·자연) "예술"(예술·공연·전시) "축제"(축제·역사·도서관)
// big      : true 이면 "미리 체크할 큰 행사"에 들어갑니다
// verified : false 이면 "확인 필요" 표시 (공식 페이지에서 날짜를 직접 확인하지 못한 정보)
// indoor   : true(실내) | false(야외) | "both"(실내+야외). 비 와도 갈 수 있는지 기준. 필터 "비 와도 OK"와 비 예보 추천에 씁니다
// travel   : (선택) "차 40분"처럼 대전에서 가는 시간. 비워 두면 화면이 city 이름으로 기준표(세종 40분, 청주 1시간, 서울 KTX 1시간 …)를 써서 보여줍니다
// image    : 공식 포스터 이미지 주소 (https://…, 있을 때만). 카드 왼쪽 섬네일로 보이고, 안 열리면 분야 아이콘이 대신 보입니다
// applyStart / deadline : 접수 시작일 / 접수 마감일 ("연-월-일", 있을 때만). applyTime : 접수 시작 시각 ("10:00"). applyNote : 접수 방법 한 줄
//   → 7일 안에 마감·시작하는 것은 화면 맨 위 "예약 서두르기"와 텔레그램 알림에 나옵니다
// closed   : (선택) true 이면 "지금은 신청할 수 없음"(인원 마감·매진·접수 종료). 화면에서 맨 아래 "접수가 끝난 행사"로 접히고 추천에서 빠집니다.
//            적지 않으면 화면이 알아서 판단합니다: 예약이 필요한데 deadline이 지났으면 마감으로 봅니다.
//            deadline이 지났어도 현장 접수가 되면 closed: false 라고 적습니다.
// closedNote : (선택) 마감 사유 한 줄. 예) "두 회차 모두 인원 마감 (11/9 확인)"
//
// 마지막 수집: 2026-11-09

// 화면 맨 위 "마지막 수집" 표시에 쓰는 값. 수집할 때마다 날짜·시각(한국 시간)을 갱신합니다.
window.LAST_UPDATED = "2026-11-11 13:30";

// 화면 맨 위 "이번 주말 추천 3곳". 수집할 때마다 다음 토·일 기준으로 다시 고릅니다 (텔레그램 추천 3곳과 같은 것).
//   weekend : 그 주말의 토요일 날짜. 이 날짜가 이번 주 토요일과 다르면 화면이 무시하고 자동으로 고릅니다.
//   items   : 최대 3개. id는 아래 행사의 id, why는 "왜 이걸 추천하는지" 한 줄 (40자 안쪽)
//   마감됐거나 끝난 행사가 들어 있으면 화면이 빼고, 빈 자리는 자동으로 채웁니다 (무료·예약 불필요·이번 주말만 하는 것 우선).
window.PICKS = {
  weekend: "2026-11-14",
  items: [
    { id: "2026-11-daejeon-noodle-festival", why: "이번 주말에만 열리는 축제. 예약 없이 바로 가면 돼요" },
    { id: "2026-11-daejeon-dma-weekend-class", why: "2학년 맞춤 무료 미술 수업, 이번이 마지막 주말 (접수 11/13까지)" },
    { id: "2026-10-daejeon-museum-folk-play", why: "11/14(토)가 휴관 전 마지막 날. 토요일은 예약 없이 현장접수" }
  ]
};

window.EVENTS = [

  // ───────────── 대전 ─────────────
  {
    id: "2026-10-daejeon-museum-folk-play",
    title: "대전시립박물관 우리놀이터 전통놀이 체험",
    start: "2026-10-16", end: "2026-11-14",
    time: "화~금 10:00~11:30 / 토 10:00, 13:00, 15:30",
    place: "대전시립박물관 우리놀이터", city: "대전 유성구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    applyStart: "2026-10-13", deadline: "2026-11-30", applyNote: "OK예약 사전예약 (토요일은 현장접수)",
    tags: ["축제"],
    indoor: true,
    url: "https://www.daejeon.go.kr/his/board/musBoardDataView.do?bbsCode=hisnews&menuSeq=677&boardDataSeq=12351", source: "대전시립박물관 공지 / OK예약서비스",
    note: "2학년 맞춤 반. 토·일 운영, 회차 시간은 예약 화면에서 확인. 4~6학년 반은 한 반이 이미 마감. 문의 042-270-7332",
    big: false, verified: true
  },
  {
    id: "2026-10-daejeon-hanbat-arboretum-tour",
    title: "한밭수목원 토요해설 (가을)",
    start: "2026-10-17", end: "2026-11-28",
    time: "시간 미확인",
    place: "한밭수목원", city: "대전 서구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    deadline: "2026-11-26", applyNote: "OK예약 선착순",
    tags: ["야외"],
    indoor: false,
    url: "https://www.daejeon.go.kr/okr2019/OkrExpList.do?menuSeq=8200", source: "대전광역시 OK예약서비스",
    note: "매주 토요일 해설사와 수목원 산책. 접수 ~11/26 선착순(OK예약). 평일 해설(10/19~11/20)도 별도 예약 가능.",
    big: false, verified: true
  },
  {
    id: "2026-10-daejeon-leeungno-dance",
    title: "이응노미술관 기획전 《춤: 붓과 몸의 리듬》",
    start: "2026-10-13", end: "2026-11-29",
    time: "시간 미확인",
    place: "이응노미술관", city: "대전 서구", region: "대전",
    cost: "유료", price: "소액 (현장 확인)", reservation: false, ages: "전연령",
    tags: ["예술"],
    indoor: true,
    url: "https://www.leeungnomuseum.or.kr/bbs/bbsView.do?bbsId=exhibit&seqno=7859&pageIndex=1&searchDisplayYn=R&en=", source: "이응노미술관",
    note: "시립미술관 바로 옆이라 함께 방문 가능. 월요일 휴관. 10~11월 어린이 교육은 아직 공지 없음 (042-611-9800).",
    big: false, verified: true
  },
  {
    id: "2026-11-daejeon-dma-weekend-class",
    title: "대전시립미술관 지역미술조명사업 연계 주말 교육 (초등 2~3학년 반)",
    start: "2026-11-01", end: "2026-11-15",
    time: "시간 미확인",
    place: "대전시립미술관", city: "대전 서구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "초등 2~3학년",
    applyStart: "2026-10-06", deadline: "2026-11-13", applyNote: "OK예약 > 체험에서 '지역미술' 검색 (선착순, 11/11 접수중 확인)",
    tags: ["예술"],
    indoor: true,
    url: "https://www.daejeon.go.kr/okr2019/expRsvtList.do?menuSeq=8200&searchType=02&keyword=지역미술&pageIdx=1", source: "대전광역시 OK예약서비스 / 대전시립미술관",
    note: "2학년 맞춤 반! 토·일 운영, 회차 시간은 OK예약 상세에서 확인. 11/11 현재 접수중. 미술관 홈 첫 화면에는 안 보이고 교육·행사 > 어린이·가족 메뉴에 있음. 예약은 OK예약 > 체험에서 '지역미술' 검색 (링크가 바로 그 화면). 접수 10/6~11/13 선착순. 4~6학년 반은 1개 반 이미 마감. 문의 042-270-7332",
    big: true, verified: true
  },
  {
    id: "2026-11-daejeon-science-weekend-class",
    title: "국립중앙과학관 11월 미래인재 주말과학교실",
    start: "2026-11-07", end: "2026-11-28",
    time: "시간 미확인",
    place: "국립중앙과학관", city: "대전 유성구", region: "대전",
    cost: "유료", price: "반별 상이 (예약페이지 확인)", reservation: true, ages: "5세~초등 6학년",
    applyStart: "2026-10-14", deadline: "2026-11-06", applyNote: "통합예약(rsvn.science.go.kr) 가입 후 결제",
    tags: ["과학"],
    indoor: true,
    url: "https://science.go.kr/mps/0/bbs/163/moveBbsNttList.do", source: "국립중앙과학관 개인교육",
    note: "매주 토요일 4회 과정. 접수 10/14~11/6. 통합예약(rsvn.science.go.kr)에서 아이 이름으로 가입 후 결제까지 해야 완료.",
    closedNote: "11월 과정 접수 11/6 종료",
    big: true, verified: true
  },
  {
    id: "2026-11-daejeon-energy-walk",
    title: "온 시민 에너지걷기 한마당 (WCPEC-9 기념)",
    start: "2026-11-15", end: "2026-11-15",
    time: "13:30 출발 (접수 11:30~13:00), 체험 14:00~17:00",
    place: "엑스포시민광장·한밭수목원·DCC", city: "대전 유성구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    deadline: "2026-10-31", applyNote: "사전등록 선착순 1,500명",
    tags: ["야외", "과학"],
    indoor: false,
    url: "https://xn--269as6am3d4uc81numd8pq3wftwa42zek7a.com/", source: "행사 공식 누리집",
    note: "수목원 QR 스탬프 걷기(완주 시 온통대전 1만원), 태양광 체험 6종, OX퀴즈. 사전등록 ~10/31 선착순 1,500명 — 접수 마감(현장등록 여부는 누리집 확인).",
    closedNote: "사전등록 10/31 종료 (현장등록 여부는 누리집 확인)",
    big: true, verified: true
  },
  {
    id: "2026-11-daejeon-noodle-festival",
    title: "누들대전축제 (전국 최대 칼국수·면요리 축제)",
    start: "2026-11-13", end: "2026-11-15",
    time: "13일 16:00~21:00 / 14~15일 12:00~21:00",
    place: "서대전시민광장", city: "대전 중구", region: "대전",
    cost: "일부 유료", price: "입장 무료, 먹거리존·일부 체험 유료", reservation: false, ages: "전연령",
    tags: ["축제"],
    indoor: false,
    url: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pSeq=13376", source: "문체부 축제 DB (주최 대전일보사)",
    note: "글로벌 누들존, 스타셰프 쿠킹쇼, 누들마스터 경연. 공식 noodle-dj.com. 주말 점심시간대 혼잡 예상.",
    big: true, verified: true
  },
  {
    id: "2026-11-daejeon-manin-forest-camp",
    title: "우리 가족이 Green 숲! 힐링 가을 캠프 (만인산자연휴양림)",
    start: "2026-11-14", end: "2026-11-15",
    time: "시간 미확인",
    place: "만인산자연휴양림", city: "대전 동구", region: "대전",
    cost: "유료", price: "미확인 (기사에 요금 없음)", reservation: true, ages: "초등생 자녀 가족 (대전 거주)",
    applyStart: "2026-11-03", applyTime: "09:00", deadline: "2026-11-13", applyNote: "대전시 누리집 시정소식 게시판 선착순 (10가족)",
    tags: ["야외", "과학"],
    indoor: false,
    url: "http://www.chungnamilbo.co.kr/news/articleView.html?idxno=917464", source: "충남일보·이코노미퀸 (주최 대전시 공원관리사업소)",
    note: "10가족 한정 1박 2일. 가족 찻상 만들기 목공체험·숲해설·숲놀이. 대전 거주 가족 대상. 11/3 9시 오픈 직후 마감 가능성 높음.",
    big: true, verified: false
  },
  {
    id: "2026-11-daejeon-namu-playground",
    title: "나무상상놀이터 개인예약 (11~12월 토·일)",
    start: "2026-11-08", end: "2026-12-20",
    time: "시간 미확인",
    place: "나무상상놀이터 (대전 OK예약 시설)", city: "대전", region: "대전",
    cost: "유료", price: "현장결제 (요금은 예약 페이지 확인)", reservation: true, ages: "미표기 (어린이 놀이시설)",
    applyStart: "2026-10-31", deadline: "2026-12-18", applyNote: "OK예약 선착순",
    tags: ["야외", "과학"],
    indoor: "both",
    url: "https://www.daejeon.go.kr/okr2019/OkrExpList.do?menuSeq=8200", source: "대전광역시 OK예약서비스",
    note: "토·일 운영(11/8~12/20), 접수 10/31~12/18 선착순. 운영 시간·장소 상세는 예약 페이지에서 확인 필요.",
    big: false, verified: true
  },
  {
    id: "2026-11-daejeon-hellocarbot-musical",
    title: "뮤지컬 헬로카봇 〈카봇크루가 되어줘!〉 (대전)",
    start: "2026-11-28", end: "2026-11-29",
    time: "토 11:00·14:00·16:30 / 일 11:00·14:00",
    place: "대전 (공연장 미확인)", city: "대전", region: "대전",
    cost: "유료", price: "미확인", reservation: true, ages: "가족 (연령 미확인)",
    applyNote: "예매처(놀티켓) 예매",
    tags: ["예술"],
    indoor: true,
    url: "https://nol.yanolja.com/ticket/products/26013205", source: "예매 사이트(놀티켓) 검색 결과",
    note: "예매 사이트 정보만 확인. 공연장·가격·관람연령은 예매 페이지에서 재확인 필요.",
    big: false, verified: false
  },

  {
    id: "2026-11-daejeon-119-experience",
    title: "대전119시민체험센터 11월 체험 (평일·토요일)",
    start: "2026-11-03", end: "2026-11-30",
    time: "시간 미확인 (예약 페이지 회차 확인)",
    place: "대전119시민체험센터", city: "대전", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령 (어린이 체험 가능)",
    applyStart: "2026-08-31", deadline: "2026-11-30", applyNote: "OK예약 선착순 (12월분은 접수 중, 10/1~12/31)",
    tags: ["과학", "야외"],
    indoor: true,
    url: "https://www.daejeon.go.kr/okr2019/expRsvtList.do?menuSeq=8200", source: "대전광역시 OK예약서비스",
    note: "화~토 운영(일·월 휴무). 화재·지진 등 안전체험. 회차·정원은 예약 페이지에서 확인.",
    big: false, verified: true
  },
  {
    id: "2026-11-daejeon-wood-culture-kids",
    title: "대전목재문화체험장 아동반 (10~12월 목공 체험)",
    start: "2026-11-03", end: "2026-12-25",
    time: "시간 미확인",
    place: "대전목재문화체험장", city: "대전", region: "대전",
    cost: "유료", price: "현장결제 (요금 예약 페이지 확인)", reservation: true, ages: "아동 (연령 미확인)",
    applyStart: "2026-09-01", deadline: "2026-12-25", applyNote: "OK예약",
    tags: ["과학", "예술"],
    indoor: true,
    url: "https://www.daejeon.go.kr/okr2019/expRsvtList.do?menuSeq=8200", source: "대전광역시 OK예약서비스",
    note: "화~일 운영. 아동반·초급반 목공 만들기. 회차별 일정·연령은 예약 페이지에서 재확인 필요.",
    big: false, verified: true
  },
  {
    id: "2026-11-daejeon-science-citizen-explore",
    title: "국립중앙과학관 11월 시민자연과학 탐사 프로그램",
    start: "2026-11-14", end: "2026-11-14",
    time: "14:00",
    place: "국립중앙과학관", city: "대전 유성구", region: "대전",
    cost: "무료", price: "미확인", reservation: true, ages: "미확인 (공고 확인)",
    applyNote: "국립중앙과학관 누리집 공고 확인",
    tags: ["과학", "야외"],
    indoor: "both",
    url: "https://www.science.go.kr/mps/1070/bbs/431/moveBbsNttList.do", source: "국립중앙과학관 행사안내",
    note: "행사안내 목록에서 날짜만 확인. 대상 연령·신청 방법·무료 여부는 공고에서 재확인 필요. 같은 달 21일(토) 별의별 과학특강은 고등학생 이상 위주라 제외.",
    big: false, verified: false
  },

  {
    id: "2026-11-daejeon-science-magic-concert",
    title: "국립중앙과학관 ORIGINAL 과학마술콘서트 시즌2",
    start: "2026-11-14", end: "2026-11-15",
    time: "시간 미확인 (사이언스홀)",
    place: "국립중앙과학관 사이언스홀", city: "대전 유성구", region: "대전",
    cost: "무료", price: "미확인 (공고 확인)", reservation: true, ages: "미확인 (가족 대상 공연)",
    applyNote: "국립중앙과학관 누리집 공고 확인",
    tags: ["과학", "예술"],
    indoor: true,
    url: "https://www.science.go.kr/mps/1070/bbs/431/moveBbsNttList.do", source: "국립중앙과학관 행사안내",
    note: "행사안내 목록에서 날짜·장소만 확인. 시간·무료 여부·예약 방법은 공고 재확인 필요. 같은 날(11/14) 시민자연과학 탐사도 있음.",
    big: false, verified: false
  },
  {
    id: "2026-11-daejeon-hanbat-lib-saturday",
    title: "한밭도서관 11월 토요문화광장 〈심청이 온다〉 전통 가면극",
    start: "2026-11-21", end: "2026-11-21",
    time: "15:00~15:50",
    place: "한밭도서관 창작방", city: "대전 서구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "미확인 (가족 공연)",
    applyStart: "2026-11-03", deadline: "2026-11-19", applyNote: "OK예약 강좌 선착순 (정원 100명, 11/5 현재 96명 접수)",
    tags: ["예술"],
    indoor: true,
    url: "https://www.daejeon.go.kr/okr2019/eduRsvtList.do?menuSeq=8101&rsvtUseStatTpcd=002&pageIdx=1", source: "대전광역시 OK예약서비스(강좌)",
    note: "거의 마감 임박(11/9 현재 잔여 2명 안팎). 50분 공연. 대상 연령은 목록에 없음.",
    big: false, verified: true
  },
  {
    id: "2026-11-daejeon-toyo-gugak",
    title: "대전시립연정국악단 상설공연 〈토요국악〉",
    start: "2026-11-14", end: "2026-11-14",
    time: "14:00",
    place: "연정국악원", city: "대전 서구", region: "대전",
    cost: "유료", price: "전석 2천원", reservation: true, ages: "초등학생 이상",
    applyNote: "OK예약 공연 예매",
    tags: ["예술"],
    indoor: true,
    url: "https://www.daejeon.go.kr/okr2019/pblcFcltList.do?menuSeq=8900", source: "대전광역시 OK예약서비스(공연/전시)",
    note: "토요일 오후 국악 공연. 관람 등급 초등학생 이상. 예매 가능.",
    big: false, verified: true
  },

  {
    id: "2026-11-daejeon-insect-model",
    title: "대전곤충생태관 곤충모형 만들기 체험",
    start: "2026-11-10", end: "2026-12-11",
    time: "화~금 (회차 시간은 OK예약 확인)",
    place: "대전곤충생태관", city: "대전", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "미확인 (어린이 체험)",
    deadline: "2026-12-10", applyNote: "OK예약 선착순 (접수중)",
    tags: ["과학"],
    indoor: true,
    url: "https://www.daejeon.go.kr/okr2019/expRsvtList.do?menuSeq=8200&searchType=02&keyword=곤충", source: "대전광역시 OK예약서비스(체험)",
    note: "화~금 운영(주말 아님). 이용기간 9/18~12/11. 대상 연령은 목록에 없음.",
    big: false, verified: true
  },
  {
    id: "2026-11-daejeon-science-animal-magic",
    title: "국립중앙과학관 리얼 애니멀매직쇼 & 바다야 날라 특별한 만남 (대한민국 월드리그 조류)",
    start: "2026-11-28", end: "2026-11-28",
    time: "시간 미확인",
    place: "국립중앙과학관", city: "대전 유성구", region: "대전",
    cost: "무료", price: "미확인 (과학관 공지 확인)", reservation: false, ages: "미확인",
    tags: ["과학"],
    indoor: true,
    url: "https://www.science.go.kr/mps/1070/bbs/431/moveBbsNttList.do", source: "국립중앙과학관 행사안내",
    note: "행사 목록에서 날짜(11/28 토)만 확인. 시간·비용·예약 여부는 공지 확인 필요.",
    big: false, verified: false
  },
  {
    id: "2026-12-daejeon-nutcracker",
    title: "유니버설발레단 발레 〈호두까기인형〉 (대전예술의전당)",
    start: "2026-12-11", end: "2026-12-12",
    time: "시간 미확인",
    place: "대전예술의전당", city: "대전 서구", region: "대전",
    cost: "유료", price: "미확인", reservation: true, ages: "미확인 (가족 공연)",
    tags: ["예술"],
    indoor: true,
    url: "https://v.daum.net/v/20260115164438376", source: "대전예술의전당 2026 시즌 기사 (1월)",
    note: "시즌 라인업 기사 기준. 예매처·가격은 대전예술의전당 공지 확인 필요.",
    big: false, verified: false
  },
  {
    id: "2026-11-daejeon-djac-forest-workshop",
    title: "대전예술의전당 어린이 체험 워크숍 〈한여름밤의 신비한 숲속 모험〉",
    start: "2026-11-21", end: "2026-11-21",
    time: "10:00 / 14:00 (각 약 120분)",
    place: "대전예술의전당 무용연습실", city: "대전 서구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "초등 2~6학년",
    applyStart: "2026-11-05", deadline: "2026-11-19", applyTime: "10:00", applyNote: "대전예술의전당 홈페이지 수강신청 (선착순 15명, 문의 042-270-8152)",
    tags: ["예술"],
    indoor: true,
    url: "https://www.daejeon.go.kr/djac/ac/cultureView.do?mngNo=596", source: "직접 요청(텔레그램) / 대전예술의전당 교육프로그램",
    note: "회신으로 요청한 행사. 셰익스피어 희곡을 오르프 악기·즉흥 장면으로 표현하는 음악·연극 워크숍. 10시·14시 두 회차 모두 현재 인원마감(취소 자리 확인 필요).",
    closed: true, closedNote: "두 회차 모두 인원 마감 (11/9 확인)",
    big: false, verified: true
  },
  {
    id: "2026-12-daejeon-djac-fartlady-play",
    title: "대전예술의전당 참여형 연극 〈방귀쟁이 며느리〉",
    start: "2026-12-05", end: "2026-12-05",
    time: "11:00 / 14:00 (약 60분)",
    place: "대전예술의전당 앙상블홀 리허설룸", city: "대전 서구", region: "대전",
    cost: "유료", price: "1만원", reservation: true, ages: "6세~초등 2학년 (부모 참관 가능)",
    applyStart: "2026-11-02", deadline: "2026-12-01", applyTime: "09:00", applyNote: "대전예술의전당 홈페이지 수강신청 (문의 042-270-8152)",
    tags: ["예술"],
    indoor: true,
    url: "https://www.daejeon.go.kr/djac/ac/cultureView.do?mngNo=594", source: "직접 요청(텔레그램) / 대전예술의전당 교육프로그램",
    note: "회신으로 요청한 행사. 옛이야기를 듣고 몸으로 표현하며 인형을 만드는 체험형 연극. 초2가 대상 상한이라 마지막 기회일 수 있음.",
    closed: true, closedNote: "두 회차 모두 인원 마감 (11/9 확인)",
    big: false, verified: true
  },
  // ───────────── 근교 ─────────────

  {
    id: "2026-10-gongju-museum-terrarium",
    title: "국립공주박물관 '우리 가족 슬기로운 공작생활' (이끼 테라리움 만들기)",
    start: "2026-11-28", end: "2026-11-28",
    time: "14:00~15:30",
    place: "국립공주박물관 세미나실·전시실", city: "공주", region: "근교",
    cost: "무료", price: "", reservation: true, ages: "초등 이상 + 가족",
    applyStart: "2026-11-23", applyTime: "10:00", deadline: "2026-11-27", applyNote: "11/23(월) 10시 누리집 선착순",
    tags: ["과학", "예술"],
    indoor: true,
    url: "https://gongju.museum.go.kr/prog/eduPrgrm/kor/sub03_01/view.do?prgrmNo=1089", source: "국립공주박물관",
    note: "11/28(토) 회차(10/24 회차는 종료). 회차 30명, 접수는 전주 월요일 10시 누리집 선착순. 보호자 동반 필수.",
    big: true, verified: true
  },
  {
    id: "2026-11-cheongju-museum-matchgirl",
    title: "국립청주박물관 어린이 뮤지컬 〈성냥팔이 소녀〉 (문화가 있는 날)",
    start: "2026-11-28", end: "2026-11-28",
    time: "14:00 / 15:00",
    place: "국립청주박물관", city: "청주", region: "근교",
    cost: "무료", price: "", reservation: false, ages: "어린이 + 가족",
    tags: ["예술"],
    indoor: true,
    url: "https://cheongju.museum.go.kr", source: "국립청주박물관",
    note: "문화가 있는 날 문화행사(공연 예정). 신청 방법은 누리집 공고에서 재확인 필요. 같은 날 공주박물관 테라리움과 일정 겹침.",
    big: false, verified: true
  },
  {
    id: "2026-11-cheongju-museum-tree-class",
    title: "국립청주박물관 어린이가족 교육 '박물관과 나무 이야기' 2차",
    start: "2026-11-21", end: "2026-11-21",
    time: "10:00~11:30",
    place: "국립청주박물관 상설전시실·야외정원", city: "청주", region: "근교",
    cost: "무료", price: "", reservation: true, ages: "초등 1~6학년 + 가족",
    applyStart: "2026-11-09", deadline: "2026-11-18", applyNote: "누리집 교육행사 탭 사전예약",
    tags: ["야외", "과학"],
    indoor: "both",
    url: "https://cheongju.museum.go.kr/www/selectBbsNttView.do?key=482&bbsNo=1&nttNo=12333", source: "국립청주박물관",
    note: "어린이 15명 정원. 접수 11/9(월)~11/18(수) 누리집 교육행사 탭. 문의 043-229-6407",
    big: true, verified: true
  },
  {
    id: "2026-11-cheongju-kids-opera-festa",
    title: "알리오페라단 키즈 오페라 페스타",
    start: "2026-11-27", end: "2026-11-28",
    time: "시간 미확인",
    place: "청주예술의전당 대공연장", city: "청주", region: "근교",
    cost: "유료", price: "요금 미확인 (예매안내 참고)", reservation: true, ages: "어린이 가족",
    applyNote: "청주예술의전당 예매안내 참고",
    tags: ["예술"],
    indoor: true,
    url: "https://www.cheongju.go.kr/ac/selectTnAhPblprfrListU3.do?key=16202", source: "청주예술의전당 연간공연정보",
    note: "11/27(금)~28(토). 예매는 청주예술의전당 예매안내 페이지에서 확인.",
    big: false, verified: true
  },
  {
    id: "2026-11-cheongju-junglebook",
    title: "가족 뮤지컬 <정글북> (청주예술의전당 대공연장)",
    start: "2026-11-21", end: "2026-11-22",
    time: "11/21 14:00, 16:00 / 11/22 11:00, 14:00",
    place: "청주예술의전당 대공연장", city: "청주", region: "근교",
    cost: "유료", price: "미확인", reservation: true, ages: "전연령 (가족)",
    tags: ["예술"],
    indoor: true,
    url: "https://www.cheongju.go.kr/ac/selectTnAhPblprfrListU3.do?key=16202", source: "청주예술의전당 연간공연정보",
    note: "11/27~28 같은 곳 '키즈 오페라 페스타'도 예정. 가격·예매처 미표기.",
    big: false, verified: true
  },

  {
    id: "2026-12-cheongju-frozen",
    title: "가족 뮤지컬 <겨울왕국> (청주아트홀)",
    start: "2026-12-20", end: "2026-12-20",
    time: "11:00, 14:00, 16:00, 18:00",
    place: "청주아트홀", city: "청주", region: "근교",
    cost: "유료", price: "미확인", reservation: true, ages: "전연령 (가족)",
    tags: ["예술"],
    indoor: true,
    url: "https://www.cheongju.go.kr/ac/selectTnAhPblprfrListU3.do?key=16202", source: "청주예술의전당 연간공연정보",
    note: "12/18(금) 10:20 <크리스마스캐롤-스쿠루지>(대공연장)도 있음. 가격·예매처 미표기.",
    big: false, verified: true
  },
  // ───────────── 전국 (큰 행사만) ─────────────
  {
    id: "2026-11-gstar-busan",
    title: "지스타 2026 (G-STAR, 국제게임전시회)",
    start: "2026-11-19", end: "2026-11-22",
    time: "11:00~17:30 (입장 마감 17:00)",
    place: "벡스코 제1·2전시장", city: "부산 해운대구", region: "전국",
    cost: "유료", price: "일반 18,000원 / 청소년(2008년 이후 출생) 8,000원", reservation: true, ages: "전연령 (초등 고학년 이상 추천)",
    applyStart: "2026-09-29", applyNote: "100% 사전예매 (현장판매 없음)",
    tags: ["과학", "축제"],
    indoor: true,
    url: "https://www.gstar.or.kr/part/gstar_btc_info.do", source: "지스타 공식 홈페이지",
    note: "100% 사전예매(현장판매 없음), 9/29부터 판매 중. 8~9세는 청소년권. 체험 대기줄 길 수 있어 초2에겐 다소 힘들 수 있음.",
    big: true, verified: true
  },
  {
    id: "2026-11-seoul-kids-fair",
    title: "제58회 서울국제유아교육전&키즈페어(유교전)",
    start: "2026-11-19", end: "2026-11-22",
    time: "10:00~18:00 (입장 마감 17:30)",
    place: "코엑스 Hall A", city: "서울 강남구", region: "전국",
    cost: "일부 유료", price: "사전등록 시 무료, 현장 10,000원 (57회 기준)", reservation: true, ages: "유아~초등 저학년",
    applyNote: "사전등록 시 무료 (educare.co.kr)",
    tags: ["과학", "예술", "축제"],
    indoor: true,
    url: "https://www.yugacrew.com/crewletter/coex-baby-fair-2026", source: "육아 블로그(유가크루) / 주최 세계전람",
    note: "로봇코딩·AI·쿠킹·공예 체험 부스. 사전등록은 educare.co.kr. 주 대상이 유아~예비초등이라 2학년에겐 다소 어릴 수 있음.",
    big: true, verified: false
  }
];
