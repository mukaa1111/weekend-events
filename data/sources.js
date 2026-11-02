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
  // OK예약서비스 (대전시 통합 예약). 주소 뒤 조건: rsvtUseStatTpcd=002 접수중, 001 접수대기(곧 접수 시작). "총 n건 | 1/2 페이지"면 pageIdx=2도 읽기
  // 행사 url에는 목록 메뉴 주소 말고 검색 결과 주소를 넣기: expRsvtList.do?menuSeq=8200&searchType=02&keyword=검색어 (예: keyword=지역미술). 상세 페이지는 주소로 못 열림(폼 전송)
  { name: "OK예약 — 체험 (접수중)", url: "https://www.daejeon.go.kr/okr2019/expRsvtList.do?menuSeq=8200&rsvtUseStatTpcd=002&pageIdx=1", region: "대전", type: "예약", active: true, note: "우리놀이터·한밭수목원 해설·나무상상놀이터·도서관 견학 등. 목록에 접수기간→applyStart/deadline, 이용기간→start/end, 요일, 무료 여부가 다 나옴. 2쪽이면 pageIdx=2도" },
  { name: "OK예약 — 체험 (접수대기)", url: "https://www.daejeon.go.kr/okr2019/expRsvtList.do?menuSeq=8200&rsvtUseStatTpcd=001&pageIdx=1", region: "대전", type: "예약", active: true, note: "곧 접수 시작하는 것. 접수기간 시작일을 applyStart에 넣으면 '예약 서두르기'에 뜸. 2026-11-02 추가" },
  { name: "OK예약 — 교육 (접수중)", url: "https://www.daejeon.go.kr/okr2019/eduRsvtList.do?menuSeq=8102&rsvtUseStatTpcd=002&pageIdx=1", region: "대전", type: "예약", active: true, note: "시립미술관 주말교육 등. 반려동물문화센터 교육은 아이 동반 가능한 것만. 2026-11-02 추가" },
  { name: "OK예약 — 교육 (접수대기)", url: "https://www.daejeon.go.kr/okr2019/eduRsvtList.do?menuSeq=8102&rsvtUseStatTpcd=001&pageIdx=1", region: "대전", type: "예약", active: true, note: "곧 접수 시작하는 교육. 2026-11-02 추가" },
  { name: "OK예약 — 강좌 (접수중)", url: "https://www.daejeon.go.kr/okr2019/eduRsvtList.do?menuSeq=8101&rsvtUseStatTpcd=002&pageIdx=1", region: "대전", type: "예약", active: true, note: "어린이·가족 강좌만 고르기 (성인 강좌가 많음). 2026-11-02 추가" },
  { name: "OK예약 — 공연/전시 (연정국악원·예술의전당·시립예술단)", url: "https://www.daejeon.go.kr/okr2019/pblcFcltList.do?menuSeq=8900", region: "대전", type: "공연장", active: true, note: "공연일·시간·관람료·관람 등급(초등학생 이상 등)·예매 여부가 글로 나옴. 등급이 '초등학생 이상'이거나 가족 공연인 것만. 2026-11-02 추가" },
  { name: "대전시립미술관 — 교육·행사 > 어린이·가족", url: "https://www.daejeon.go.kr/dma/DmaEduList.do?category=2&menuSeq=6089", region: "대전", type: "기관", active: true, note: "메인(/dma)에는 교육 프로그램이 안 보임. 이 목록에 기간·수강료·장소와 'OK예약 > 체험에서 ○○ 검색' 안내가 글로 나옴. 2026-11-02 주소 교체" },
  { name: "이응노미술관", url: "https://www.leeungnomuseum.or.kr", region: "대전", type: "기관", active: true, note: "행사 상세가 이미지라 본문 읽기 어려움" },
  { name: "대전시립박물관", url: "https://www.daejeon.go.kr/his", region: "대전", type: "기관", active: true },
  { name: "대전관광공사 (대전 문화관광)", url: "https://www.daejeontour.co.kr", region: "대전", type: "행사달력", active: true, note: "daejeon.go.kr/tou는 404. 이 주소는 보안 오류로 가끔 안 열림 → 문체부 축제 DB·뉴스로 대체" },
  { name: "대전광역시 통합도서관", url: "https://www.daejeon.go.kr/lib", region: "대전", type: "도서관", active: false, note: "주소가 404. 올바른 주소 확인 후 다시 켜기" },
  { name: "대전시민천문대", url: "https://star.metro.daejeon.kr", region: "대전", type: "기관", active: true, note: "2026-10-16 접속 실패. 다음 수집 때 재시도" },
  { name: "대전교육과학연구원", url: "https://www.dise.go.kr", region: "대전", type: "기관", active: true, note: "2026-10-16 접속 실패. 다음 수집 때 재시도" },
  { name: "대전 서구 문화관광 (축제·행사)", url: "https://www.seogu.go.kr/tour/", region: "대전", type: "행사달력", active: true, note: "축제 상세에 기간·장소·주최가 글로 잘 나옴. '지난축제' 표시된 건 제외. 2026-10-29 추가" },
  { name: "대전 유성구 문화관광 (축제)", url: "https://www.yuseong.go.kr/tour/", region: "대전", type: "행사달력", active: true, note: "축제 소개는 있으나 연도별 날짜는 검색으로 보완. 2026-10-29 추가" },
  { name: "대덕구·중구·동구 문화관광", url: "", query: "대덕구 축제 ○월 / 대전 중구 축제 ○월 / 대전 동구 축제 ○월", region: "대전", type: "검색", active: true, note: "구청 사이트가 클라우드에서 안 열려(404) 검색으로 대신. 대덕문화관광재단·중구문화원 행사 포함" },
  { name: "대전 이번 주말 축제·행사 검색", url: "", query: "대전 이번 주말 축제 / 대전 ○월 축제 어린이 가족 / 대전 ○월 어린이 공연 전시", region: "대전", type: "검색", active: true, note: "대전일보·중도일보·충청투데이 기사가 주로 잡힘. 기사만 있으면 verified:false" },
  { name: "대전일보 문화면 (행사 기사)", url: "https://www.daejonilbo.com/news/articleList.html?sc_section_code=S1N10", region: "대전", type: "뉴스", active: true, note: "제목·날짜가 읽힘. 가족·아동 행사 기사 자주 실림. 기사만 근거면 verified:false, 행사 날짜가 수집 기간 안인 것만. 2026-10-29 추가" },
  { name: "대전문화재단·대전예술의전당·시립연정국악원", url: "", query: "대전문화재단 ○월 행사 / 대전예술의전당 ○월 어린이 공연 / 대전시립연정국악원 ○월 공연", region: "대전", type: "검색", active: true, note: "공식 사이트가 보안오류·접속불가라 검색으로 대신" },

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
  { name: "문체부 축제 DB — 대전 필터", url: "https://www.mcst.go.kr/site/s_culture/festival/festivalList.jsp?pSido=06&pOrder=01up&pCurrentPage=1", region: "대전", type: "행사달력", active: true, note: "pSido=06이 대전. 전국 목록 첫 페이지만 보면 대전이 묻혀서 놓침(2026-10 대덕대청호물결축제 누락 원인). 반드시 이 필터 주소로 읽고 2쪽 이상이면 다음 쪽도" },
  { name: "문체부 축제 DB — 세종 필터", url: "https://www.mcst.go.kr/site/s_culture/festival/festivalList.jsp?pSido=08&pOrder=01up&pCurrentPage=1", region: "근교", type: "행사달력", active: true, note: "pSido=08 세종" },
  { name: "문체부 축제 DB — 충북 필터", url: "https://www.mcst.go.kr/site/s_culture/festival/festivalList.jsp?pSido=12&pOrder=01up&pCurrentPage=1", region: "근교", type: "행사달력", active: true, note: "pSido=12 충북. 청주·옥천만 고르기" },
  { name: "문체부 축제 DB — 충남 필터", url: "https://www.mcst.go.kr/site/s_culture/festival/festivalList.jsp?pSido=13&pOrder=01up&pCurrentPage=1", region: "근교", type: "행사달력", active: true, note: "pSido=13 충남. 공주·논산·계룡·금산·부여·천안만 고르기" },
  { name: "네이버 블로그 '대전 아이와 주말' 검색", url: "https://search.naver.com/search.naver?where=blog&query=대전+아이와+주말", region: "보완", type: "블로그", active: true, note: "에이전트 검색으로는 결과가 적음. 뉴스·축제 포털로 보완" },
  { name: "인스타그램 '대전아이와' 해시태그", url: "https://www.instagram.com/explore/tags/대전아이와/", region: "보완", type: "SNS", active: true, note: "로그인 없이는 못 읽음. 직접 보고 알려주는 용도" },

  // 전국 (큰 행사만)
  { name: "펀서울 (서울시 축제 포털)", url: "https://festival.seoul.go.kr", region: "전국", type: "행사달력", active: true, note: "서울 큰 행사 확인용. 2026-10-16 추가" },
  { name: "국립중앙박물관 어린이박물관", url: "https://www.museum.go.kr/site/child/home", region: "전국", type: "기관", active: true, note: "상설 3종 무료·사전예약. 날짜 있는 행사는 드묾" },
  { name: "국립과천과학관", url: "https://www.sciencecenter.go.kr", region: "전국", type: "기관", active: true, note: "본문이 안 읽힘(동적 페이지). 검색으로 보완" }
];
