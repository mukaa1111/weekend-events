// 수집 출처 목록. 에이전트는 이 목록을 보고 행사를 모읍니다.
// 추가하려면 채팅으로 "출처에 ○○ 추가해줘 (주소)"라고 말하면 됩니다.
//
// region : "대전" | "근교" | "전국" | "보완"(블로그·뉴스레터 등)
// type   : "기관" | "행사달력" | "도서관" | "예약" | "공연장" | "블로그" | "뉴스레터" | "SNS"
// active : false 로 바꾸면 잠시 수집에서 빠집니다 (목록에는 흐리게 보임)
// note   : 수집하면서 알게 된 것 (안 열리는 주소, 요령 등)
//
// 2026-10-16 첫 수집 후 갱신: 잘 열린 출처 추가, 안 열리는 출처는 메모 또는 잠시 끔

window.SOURCES = [
  // 대전
  { name: "국립중앙과학관 행사안내·개인교육", url: "https://www.science.go.kr/mps/1070/bbs/431/moveBbsNttList.do", region: "대전", type: "기관", active: true, note: "메인보다 /mps/ 게시판이 잘 읽힘. 예약은 rsvn.science.go.kr" },
  { name: "대전광역시 OK예약서비스 (체험 예약)", url: "https://www.daejeon.go.kr/okr2019/OkrExpList.do?menuSeq=8200", region: "대전", type: "예약", active: true, note: "미술관 주말교육, 우리놀이터, 한밭수목원 해설이 여기서 접수. 2026-10-16 추가" },
  { name: "대전시립미술관", url: "https://www.daejeon.go.kr/dma", region: "대전", type: "기관", active: true },
  { name: "이응노미술관", url: "https://www.leeungnomuseum.or.kr", region: "대전", type: "기관", active: true, note: "행사 상세가 이미지라 본문 읽기 어려움" },
  { name: "대전시립박물관", url: "https://www.daejeon.go.kr/his", region: "대전", type: "기관", active: true },
  { name: "대전관광공사 (대전 문화관광)", url: "https://www.daejeontour.co.kr", region: "대전", type: "행사달력", active: true, note: "daejeon.go.kr/tou는 404. 이 주소는 보안 오류로 가끔 안 열림 → 문체부 축제 DB·뉴스로 대체" },
  { name: "대전광역시 통합도서관", url: "https://www.daejeon.go.kr/lib", region: "대전", type: "도서관", active: false, note: "주소가 404. 올바른 주소 확인 후 다시 켜기" },
  { name: "대전시민천문대", url: "https://star.metro.daejeon.kr", region: "대전", type: "기관", active: true, note: "2026-10-16 접속 실패. 다음 수집 때 재시도" },
  { name: "대전교육과학연구원", url: "https://www.dise.go.kr", region: "대전", type: "기관", active: true, note: "2026-10-16 접속 실패. 다음 수집 때 재시도" },

  // 근교 (차로 1시간 안쪽)
  { name: "국립세종도서관", url: "https://sejong.nl.go.kr", region: "근교", type: "도서관", active: true },
  { name: "세종시 행사달력", url: "https://www.sejong.go.kr/prog/scheduleDetail/SCN_1/monthList.do", region: "근교", type: "행사달력", active: true, note: "월별 행사가 잘 정리됨. 2026-10-16 추가" },
  { name: "세종시문화관광재단 (한글문화도시)", url: "https://www.sjcf.or.kr/hangeul/www/prfr/list.do", region: "근교", type: "행사달력", active: true, note: "메인은 안 열리고 한글문화도시 게시판만 열림" },
  { name: "세종문화예술회관 (조치원)", url: "https://www.sjac.or.kr", region: "근교", type: "공연장", active: true, note: "보안 오류로 직접 안 열림 → 검색으로 보완. 2026-10-16 추가" },
  { name: "국립청주박물관 (어린이박물관)", url: "https://cheongju.museum.go.kr", region: "근교", type: "기관", active: true, note: "교육·행사·전시 모두 잘 열림" },
  { name: "청주예술의전당 연간공연정보", url: "https://www.cheongju.go.kr/ac/selectTnAhPblprfrListU3.do?key=16202", region: "근교", type: "공연장", active: true, note: "가족 뮤지컬 일정이 한 표에 있음. 2026-10-16 추가" },
  { name: "국립현대미술관 청주", url: "https://www.mmca.go.kr", region: "근교", type: "기관", active: true, note: "교육 목록 페이지 404. 검색으로 보완" },
  { name: "국립공주박물관", url: "https://gongju.museum.go.kr", region: "근교", type: "기관", active: true, note: "교육·문화행사 잘 열림" },
  { name: "논산시 축제 안내", url: "https://www.nonsan.go.kr", region: "근교", type: "행사달력", active: true },

  // 보완 (추천 글, 뉴스레터)
  { name: "잘쓸레터(어피티) 지난 호 보관함", url: "https://uppity.co.kr/newsletter/jalsseul-letter/", region: "보완", type: "뉴스레터", active: true, note: "로그인 없이 전문 공개. Gmail 연결 불필요. '즐길거리/일정' 코너 확인" },
  { name: "문화체육관광부 축제 안내", url: "https://www.mcst.go.kr/site/s_culture/festival/festivalList.jsp", region: "보완", type: "행사달력", active: true, note: "대전·근교 축제 날짜 확인용으로 가장 믿을 만함" },
  { name: "네이버 블로그 '대전 아이와 주말' 검색", url: "https://search.naver.com/search.naver?where=blog&query=대전+아이와+주말", region: "보완", type: "블로그", active: true, note: "에이전트 검색으로는 결과가 적음. 뉴스·축제 포털로 보완" },
  { name: "인스타그램 '대전아이와' 해시태그", url: "https://www.instagram.com/explore/tags/대전아이와/", region: "보완", type: "SNS", active: true, note: "로그인 없이는 못 읽음. 직접 보고 알려주는 용도" },

  // 전국 (큰 행사만)
  { name: "펀서울 (서울시 축제 포털)", url: "https://festival.seoul.go.kr", region: "전국", type: "행사달력", active: true, note: "서울 큰 행사 확인용. 2026-10-16 추가" },
  { name: "국립중앙박물관 어린이박물관", url: "https://www.museum.go.kr/site/child/home", region: "전국", type: "기관", active: true, note: "상설 3종 무료·사전예약. 날짜 있는 행사는 드묾" },
  { name: "국립과천과학관", url: "https://www.sciencecenter.go.kr", region: "전국", type: "기관", active: true, note: "본문이 안 읽힘(동적 페이지). 검색으로 보완" }
];
