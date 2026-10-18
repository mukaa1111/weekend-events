// 행사 데이터. 중괄호 한 묶음이 행사 1건입니다.
// 날짜는 "연-월-일" 형식. 하루짜리 행사는 start와 end를 같게 적습니다.
//
// region   : "대전" | "근교" | "전국"
// cost     : "무료" | "유료" | "일부 유료"
// tags     : "과학"(과학·만들기·코딩) "야외"(운동·야외·자연) "예술"(예술·공연·전시) "축제"(축제·역사·도서관)
// big      : true 이면 "미리 체크할 큰 행사"에 들어갑니다
// verified : false 이면 "확인 필요" 표시 (공식 페이지에서 날짜를 직접 확인하지 못한 정보)
//
// 마지막 수집: 2026-10-19

window.EVENTS = [

  // ───────────── 대전 ─────────────
  {
    id: "2026-10-daejeon-contents-fair",
    title: "2026 대전콘텐츠페어 (공공캐릭터 페스티벌·기능성게임 체험)",
    start: "2026-10-16", end: "2026-10-18",
    time: "시간 미확인",
    place: "대전컨벤션센터(DCC) 제2전시장", city: "대전 유성구", region: "대전",
    cost: "일부 유료", price: "입장료 미확인 (사전등록 안내 있음)", reservation: false, ages: "전연령",
    tags: ["과학", "예술"],
    url: "https://inews24.com/view/2012526", source: "아이뉴스24·헤럴드경제 (대전관광공사 주최)",
    note: "전국 지자체 캐릭터 92종, 10/17 캐릭터 퍼레이드, 기능성게임 27종 체험. 10/17~18 대전역↔DCC 셔틀 1,000원. 옆 빵축제와 같은 날 가능.",
    big: false, verified: false
  },
  {
    id: "2026-10-daejeon-bread-festival",
    title: "2026 대전 빵축제",
    start: "2026-10-17", end: "2026-10-18",
    time: "13:00~21:00",
    place: "엑스포과학공원 한빛탑 일원", city: "대전 유성구", region: "대전",
    cost: "일부 유료", price: "입장 무료, 빵 구매 유료", reservation: false, ages: "전연령",
    tags: ["축제", "야외"],
    url: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pSeq=11970", source: "문화체육관광부 축제정보 (주최 대전관광공사)",
    note: "빵집 120곳 부스(A~E존), '빵잼 올림픽' 등 가족 놀이·제과 체험. 인파 매우 많음, 오픈 직후 방문 권장. 잘쓸레터에도 소개.",
    big: true, verified: true
  },
  {
    id: "2026-10-daejeon-yuseong-chrysanthemum",
    title: "제17회 유성국화축제",
    start: "2026-10-17", end: "2026-11-01",
    time: "10:00~22:00",
    place: "유림공원 일원", city: "대전 유성구", region: "대전",
    cost: "일부 유료", price: "입장 무료, 일부 체험부스 유료", reservation: false, ages: "전연령",
    tags: ["야외", "축제"],
    url: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pSeq=12919", source: "문화체육관광부 축제정보 (주최 유성구청)",
    note: "국화조형물·분재, 원예·목공 체험, 로봇 캐리커처, 저녁 점등·버스킹. 주말 혼잡, 저녁 산책 코스로도 좋음. 문의 042-611-2678",
    big: true, verified: true
  },
  {
    id: "2026-10-daejeon-museum-folk-play",
    title: "대전시립박물관 우리놀이터 전통놀이 체험",
    start: "2026-10-16", end: "2026-11-14",
    time: "화~금 10:00~11:30 / 토 10:00, 13:00, 15:30",
    place: "대전시립박물관 우리놀이터", city: "대전 유성구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    tags: ["축제"],
    url: "https://www.daejeon.go.kr/his/board/musBoardDataView.do?bbsCode=hisnews&menuSeq=677&boardDataSeq=12351", source: "대전시립박물관 공지 / OK예약서비스",
    note: "평일은 OK예약 사전예약(11월분 10/13~11/30 접수 중), 토요일은 현장접수만. 일·월 휴무. 11/16~30 시설보수 휴관.",
    big: false, verified: true
  },
  {
    id: "2026-10-daejeon-hanbat-arboretum-tour",
    title: "한밭수목원 토요해설 (가을)",
    start: "2026-10-17", end: "2026-11-28",
    time: "시간 미확인",
    place: "한밭수목원", city: "대전 서구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    tags: ["야외"],
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
    url: "https://www.leeungnomuseum.or.kr/bbs/bbsView.do?bbsId=exhibit&seqno=7859&pageIndex=1&searchDisplayYn=R&en=", source: "이응노미술관",
    note: "시립미술관 바로 옆이라 함께 방문 가능. 월요일 휴관. 10~11월 어린이 교육은 아직 공지 없음 (042-611-9800).",
    big: false, verified: true
  },
  {
    id: "2026-10-daejeon-science-lecture",
    title: "국립중앙과학관 별의별 과학특강 (10월)",
    start: "2026-10-24", end: "2026-10-24",
    time: "시간 미확인",
    place: "국립중앙과학관 사이언스홀", city: "대전 유성구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    tags: ["과학"],
    url: "https://www.science.go.kr/mps/1070/bbs/431/moveBbsNttList.do", source: "국립중앙과학관 행사안내",
    note: "토요일 대중 과학강연. 누리집 선착순 예약 + 잔여석 현장접수. 강연 주제·시간은 공지 확인.",
    big: false, verified: true
  },
  {
    id: "2026-10-daejeon-maker-play",
    title: "국립중앙과학관 「2026 메이커 PLAY」 + 마리오네트 인형극 〈낭만유랑극단〉",
    start: "2026-10-31", end: "2026-10-31",
    time: "시간 미확인",
    place: "국립중앙과학관 꿈이광장·사이언스홀", city: "대전 유성구", region: "대전",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["과학", "예술"],
    url: "https://www.science.go.kr/mps/1070/bbs/431/moveBbsNttList.do", source: "국립중앙과학관 행사안내",
    note: "메이커 체험부스 45개 + 관람객 투표. 같은 날 사이언스홀 인형극. 공연 예약 여부는 당일 전 공지 확인.",
    big: true, verified: true
  },
  {
    id: "2026-11-daejeon-dma-weekend-class",
    title: "대전시립미술관 주말 교육 (초등 2~3학년 반)",
    start: "2026-11-01", end: "2026-11-15",
    time: "시간 미확인",
    place: "대전시립미술관", city: "대전 서구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "초등 2~3학년",
    tags: ["예술"],
    url: "https://www.daejeon.go.kr/okr2019/OkrExpList.do?menuSeq=8200", source: "대전광역시 OK예약서비스 / 대전시립미술관",
    note: "2학년 맞춤 반! 토·일 운영. 접수 10/6~11/13 선착순(OK예약). 연계 전시 《선과 색, 지역의 기억》 10/21 개막. 문의 042-270-7332",
    big: true, verified: true
  },
  {
    id: "2026-11-daejeon-science-weekend-class",
    title: "국립중앙과학관 11월 미래인재 주말과학교실",
    start: "2026-11-07", end: "2026-11-28",
    time: "시간 미확인",
    place: "국립중앙과학관", city: "대전 유성구", region: "대전",
    cost: "유료", price: "반별 상이 (예약페이지 확인)", reservation: true, ages: "5세~초등 6학년",
    tags: ["과학"],
    url: "https://science.go.kr/mps/0/bbs/163/moveBbsNttList.do", source: "국립중앙과학관 개인교육",
    note: "매주 토요일 4회 과정. 접수 10/14~11/6. 통합예약(rsvn.science.go.kr)에서 아이 이름으로 가입 후 결제까지 해야 완료.",
    big: true, verified: true
  },
  {
    id: "2026-11-daejeon-energy-walk",
    title: "온 시민 에너지걷기 한마당 (WCPEC-9 기념)",
    start: "2026-11-15", end: "2026-11-15",
    time: "13:30 출발 (접수 11:30~13:00), 체험 14:00~17:00",
    place: "엑스포시민광장·한밭수목원·DCC", city: "대전 유성구", region: "대전",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    tags: ["야외", "과학"],
    url: "https://xn--269as6am3d4uc81numd8pq3wftwa42zek7a.com/", source: "행사 공식 누리집",
    note: "수목원 QR 스탬프 걷기(완주 시 온통대전 1만원), 태양광 체험 6종, OX퀴즈. 사전등록 ~10/31 선착순 1,500명 — 서두를 것.",
    big: true, verified: true
  },

  // ───────────── 근교 ─────────────
  {
    id: "2026-10-cheongju-chojeong-festival",
    title: "세종대왕과 초정약수축제",
    start: "2026-10-16", end: "2026-10-18",
    time: "10:00~21:00",
    place: "초정문화공원·초정행궁 일원", city: "청주", region: "근교",
    cost: "일부 유료", price: "입장 무료, 체험부스 유료", reservation: false, ages: "전연령",
    tags: ["축제", "야외"],
    url: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pSeq=11834", source: "문화체육관광부 축제정보",
    note: "전통공방·만들기·족욕 체험, 보물찾기, 훈민정음 디지털 전시, 한복 체험. 대전에서 차로 약 1시간.",
    big: false, verified: true
  },
  {
    id: "2026-10-sejong-arboretum-free-festival",
    title: "제6회 사회적가치 나눔축제 (국립세종수목원 무료 개방)",
    start: "2026-10-17", end: "2026-10-18",
    time: "시간 미확인",
    place: "국립세종수목원", city: "세종", region: "근교",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["야외", "축제"],
    url: "https://www.sejongyeonhap.co.kr/news/articleView.html?idxno=58123", source: "세종시민일보 (세종시 주최)",
    note: "행사 기간 수목원 무료 입장. 기업 부스 70곳, 스티커투어, 문화공연. 어린이 전용 체험은 미확인.",
    big: false, verified: false
  },
  {
    id: "2026-10-cheonan-bread-day",
    title: "2026 빵빵데이 천안",
    start: "2026-10-17", end: "2026-10-18",
    time: "시간 미확인",
    place: "천안종합운동장 오륜문 광장 일원", city: "천안", region: "근교",
    cost: "일부 유료", price: "입장 무료 추정, 빵 구매 유료", reservation: false, ages: "전연령",
    tags: ["축제"],
    url: "https://www.cheonan.go.kr/pangpangday/index.do", source: "잘쓸레터(어피티)",
    note: "17일 개막식 드론 1,000대 라이트쇼, 18일 빵 음악회. 대전 빵축제와 같은 주말이라 하나만 고르기.",
    big: false, verified: false
  },
  {
    id: "2026-10-cheongju-media-art",
    title: "2026 국가유산 미디어아트 청주 '빛으로 여는 청주의 보물'",
    start: "2026-10-16", end: "2026-10-24",
    time: "19:00~22:00",
    place: "청주 용두사지 철당간 일원 (원도심)", city: "청주", region: "근교",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["예술", "축제"],
    url: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pSeq=13539", source: "문화체육관광부 행사안내 (국가유산청·청주시)",
    note: "철당간·망선루 등 4곳 미디어파사드, 3D 사운드 투어, 포토존. 야간 행사. 공식 누리집 cjculturenight.org",
    big: true, verified: true
  },
  {
    id: "2026-10-sejong-arboretum-night",
    title: "국립세종수목원 야간개장 '우리 함께夜' + 주말 정원체험",
    start: "2026-10-16", end: "2026-10-31",
    time: "금·토 18:00~21:30",
    place: "국립세종수목원 (사계절전시온실·한국전통정원)", city: "세종", region: "근교",
    cost: "유료", price: "어른 5,000원 / 어린이 3,000원 (변동 가능)", reservation: false, ages: "전연령",
    tags: ["야외", "과학"],
    url: "https://www.sejong.go.kr/prog/scheduleDetail/SCN_1/monthList.do", source: "세종시 행사달력 / 경북매일 보도",
    note: "10월 말까지 매주 금·토 야간개장. 토요일 19시 가족형 공연·플리마켓, 한복 무료대여. 온실에서 테라리움·압화 체험(요금 별도).",
    big: false, verified: true
  },
  {
    id: "2026-10-sejong-donghak-exhibit",
    title: "국립세종도서관 동학농민혁명기록물 순회전 + '1894 기억저장소' 체험",
    start: "2026-10-16", end: "2026-11-01",
    time: "도서관 개관시간",
    place: "국립세종도서관 1층 전시실", city: "세종", region: "근교",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["축제"],
    url: "https://sejong.nl.go.kr/brd/NttView.do?bbsSe=BBST002&menuId=O122&upperMenuId=O100&selectedIdx=106644", source: "국립세종도서관",
    note: "세계기록유산 전시. 의상 체험, 다색 스탬프 엽서, 기록 스티커 지도. 10/26~31 임시휴관이라 10/25 이전 방문.",
    big: false, verified: true
  },
  {
    id: "2026-10-sejong-hangeul-namjune",
    title: "2026 한글문화특별기획전 <세종과 남준> (세종대왕 × 백남준)",
    start: "2026-10-16", end: "2026-11-08",
    time: "10:00~18:00",
    place: "세종중앙공원 비엔날레 전시관", city: "세종", region: "근교",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["예술"],
    url: "https://www.sjcf.or.kr/hangeul/www/prfr/list.do?key=2504150023", source: "세종시문화관광재단 한글문화도시",
    note: "도슨트 해설 화~일 14시·16시. 주말 체험 '나도 한글장난감아티스트'(장난감 분해·조립)는 온라인 사전신청. 문의 044-850-8952",
    big: false, verified: true
  },
  {
    id: "2026-10-cheongju-museum-metal-exhibit",
    title: "국립청주박물관 특별전 '빛·울림·힘 - 금속, 감각을 깨우다' + 어린이박물관",
    start: "2026-10-16", end: "2026-11-08",
    time: "09:00~18:00 (월요일 휴관)",
    place: "국립청주박물관 청명관 / 어린이박물관", city: "청주", region: "근교",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    tags: ["예술", "축제"],
    url: "https://cheongju.museum.go.kr/www/speclExbiView.do?key=48&exbiNo=158", source: "국립청주박물관",
    note: "특별전은 11/8까지. 어린이박물관은 온라인 회차 예약(kguide.kr/cjnm001) 권장. 미르숲·금관실은 12/27까지 휴실.",
    big: false, verified: true
  },
  {
    id: "2026-10-gongju-museum-terrarium",
    title: "국립공주박물관 '우리 가족 슬기로운 공작생활' (이끼 테라리움 만들기)",
    start: "2026-10-24", end: "2026-11-28",
    time: "14:00~15:30",
    place: "국립공주박물관 세미나실·전시실", city: "공주", region: "근교",
    cost: "무료", price: "", reservation: true, ages: "초등 이상 + 가족",
    tags: ["과학", "예술"],
    url: "https://gongju.museum.go.kr/prog/eduPrgrm/kor/sub03_01/view.do?prgrmNo=1089", source: "국립공주박물관",
    note: "토요일 회차 10/24, 11/28. 회차 30명, 접수는 전주 월요일 10시 누리집 선착순(10/19, 11/23). 보호자 동반 필수.",
    big: true, verified: true
  },
  {
    id: "2026-10-cheongju-museum-concert",
    title: "국립청주박물관 가을 음악회 '쉼포니'",
    start: "2026-10-24", end: "2026-10-31",
    time: "13:30~14:30 (현장접수 12:00~13:00)",
    place: "국립청주박물관 청명관 대강당", city: "청주", region: "근교",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["예술"],
    url: "https://cheongju.museum.go.kr/www/selectBbsNttView.do?key=482&bbsNo=1&nttNo=12347", source: "국립청주박물관",
    note: "10/24(토)·10/31(토) 2회. 사전예약 없이 당일 선착순 238석. 특별전·어린이박물관과 같은 날 묶기 좋음.",
    big: false, verified: true
  },
  {
    id: "2026-10-sejong-sports-festival",
    title: "2026 세종 스포츠 축제",
    start: "2026-10-24", end: "2026-10-24",
    time: "08:00~21:00",
    place: "세종중앙공원", city: "세종", region: "근교",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["야외", "축제"],
    url: "https://www.sejong.go.kr/prog/scheduleDetail/SCN_1/monthList.do", source: "세종시 행사달력",
    note: "비용·세부 프로그램은 미확인(행사달력에는 날짜·장소만 있음). 같은 날 밤 국립세종수목원 야간개장과 묶어 갈 수 있음.",
    big: false, verified: true
  },
  {
    id: "2026-10-sejong-lighton",
    title: "2026 LIGHT ON 세종 (국립세종수목원 빛 행사)",
    start: "2026-10-30", end: "2026-11-01",
    time: "시간 미확인",
    place: "국립세종수목원", city: "세종", region: "근교",
    cost: "유료", price: "수목원 입장료 (상세 미확인)", reservation: false, ages: "전연령",
    tags: ["야외", "축제"],
    url: "https://www.sejong.go.kr/prog/scheduleDetail/SCN_1/monthList.do?mno=sub04_02&year=2026&month=10&day=1", source: "세종시 행사달력",
    note: "세종시 행사달력에 등록. 프로그램·시간·요금은 수목원 누리집(sjna.or.kr)에서 방문 전 확인.",
    big: false, verified: true
  },
  {
    id: "2026-10-sejong-doggy-poo",
    title: "연극 <강아지똥> (세종문화예술회관)",
    start: "2026-10-31", end: "2026-10-31",
    time: "시간 미확인",
    place: "세종문화예술회관 (조치원)", city: "세종", region: "근교",
    cost: "유료", price: "미확인", reservation: true, ages: "36개월 이상",
    tags: ["예술"],
    url: "https://www.sjac.or.kr/culture/main/view", source: "세종문화예술회관 (검색 결과)",
    note: "권정생 그림책 원작, 50분. 10/23~24 같은 곳 매직쇼 <후디니>도 있음. 공식 사이트 접속 오류로 시간·가격 미확인.",
    big: false, verified: false
  },
  {
    id: "2026-11-cheongju-snowwhite",
    title: "가족 뮤지컬 <백설공주> (청주아트홀)",
    start: "2026-11-07", end: "2026-11-08",
    time: "11:00, 14:00, 16:00",
    place: "청주아트홀", city: "청주", region: "근교",
    cost: "유료", price: "미확인", reservation: true, ages: "전연령 (가족)",
    tags: ["예술"],
    url: "https://www.cheongju.go.kr/ac/selectTnAhPblprfrListU3.do?key=16202", source: "청주예술의전당 연간공연정보",
    note: "토·일 각 3회. 11/7(토) 17:00 소공연장 '색소폰 앙상블 가족음악회'도 있음. 가격·예매처 미표기.",
    big: false, verified: true
  },
  {
    id: "2026-11-cheongju-museum-tree-class",
    title: "국립청주박물관 어린이가족 교육 '박물관과 나무 이야기' 2차",
    start: "2026-11-21", end: "2026-11-21",
    time: "10:00~11:30",
    place: "국립청주박물관 상설전시실·야외정원", city: "청주", region: "근교",
    cost: "무료", price: "", reservation: true, ages: "초등 1~6학년 + 가족",
    tags: ["야외", "과학"],
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
    tags: ["예술"],
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
    url: "https://www.cheongju.go.kr/ac/selectTnAhPblprfrListU3.do?key=16202", source: "청주예술의전당 연간공연정보",
    note: "11/27~28 같은 곳 '키즈 오페라 페스타'도 예정. 가격·예매처 미표기.",
    big: false, verified: true
  },

  // ───────────── 전국 (큰 행사만) ─────────────
  {
    id: "2026-10-seoul-silvergrass-festival",
    title: "제25회 서울억새축제",
    start: "2026-10-17", end: "2026-10-23",
    time: "10:00~21:00",
    place: "월드컵공원 하늘공원 일대", city: "서울 마포구", region: "전국",
    cost: "무료", price: "", reservation: false, ages: "전연령",
    tags: ["야외", "축제"],
    url: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pSeq=11817", source: "서울시·문체부 축제정보",
    note: "억새 라이팅쇼·포토존, 밤 9시까지. 월드컵경기장역에서 도보 40분 또는 맹꽁이 전기차. 주말 혼잡.",
    big: true, verified: true
  },
  {
    id: "2026-10-mungyeong-apple-festival",
    title: "2026 문경사과축제",
    start: "2026-10-17", end: "2026-11-01",
    time: "09:00~18:00",
    place: "문경새재도립공원 일원", city: "경북 문경", region: "전국",
    cost: "일부 유료", price: "입장 무료, 사과따기 체험 유료", reservation: false, ages: "전연령",
    tags: ["야외", "축제"],
    url: "https://www.mcst.go.kr/site/s_culture/festival/festivalView.jsp?pSeq=11812", source: "문체부 축제정보",
    note: "문경새재 단풍 + 사과농장 체험. 대전에서 차로 약 1시간 30분. 체험 세부는 mgapple.or.kr 확인.",
    big: true, verified: true
  },
  {
    id: "2026-10-gimcheon-gimbap-festival",
    title: "김천김밥축제",
    start: "2026-10-23", end: "2026-10-25",
    time: "시간 미확인",
    place: "직지사길 일원", city: "경북 김천", region: "전국",
    cost: "일부 유료", price: "입장 무료 추정, 김밥 구매 유료", reservation: false, ages: "전연령",
    tags: ["축제"],
    url: "https://gimbapcity.kr/main/main.html", source: "잘쓸레터(어피티)",
    note: "전국 김밥 맛집 모음 축제. 대전에서 차로 약 1시간 20분 또는 KTX 김천(구미)역. 직지사 단풍과 연계.",
    big: true, verified: false
  },
  {
    id: "2026-10-seoul-starlight-festival",
    title: "2026 별빛축제 (서울시립과학관×노원천문우주과학관)",
    start: "2026-10-24", end: "2026-10-25",
    time: "토 09:30~21:00 / 일 09:30~17:30",
    place: "서울시립과학관", city: "서울 노원구", region: "전국",
    cost: "무료", price: "", reservation: true, ages: "전연령",
    tags: ["과학", "축제"],
    url: "https://science.seoul.go.kr/sciEvent/starlight/read?menuId=76&progMstId=2338", source: "펀서울·서울시립과학관",
    note: "토요일 야간 공개 별관측(우천 취소), 천문강연·과학체험부스. 일부 사전예약. 주차 협소, 하계역 도보 1.2km.",
    big: true, verified: true
  },
  {
    id: "2026-10-changdeok-inner-palace",
    title: "창덕궁 내전(희정당·대조전) 특별관람",
    start: "2026-10-20", end: "2026-10-31",
    time: "시간 미확인",
    place: "창덕궁", city: "서울 종로구", region: "전국",
    cost: "일부 유료", price: "창덕궁 입장료 별도 (만 24세 이하 무료), 특별관람 요금 미확인", reservation: true, ages: "초등",
    tags: ["축제"],
    url: "https://www.segye.com/newsView/20261013518690", source: "잘쓸레터(어피티)",
    note: "평소 비공개인 내전 내부 관람. 회차·인원 제한으로 사전예약 필요 가능성 높음. 역사 체험 코스.",
    big: true, verified: false
  },
  {
    id: "2026-10-seoul-grandpark-autumn",
    title: "서울대공원 가을축제 '예술로 물드는 피노키오의 숲'",
    start: "2026-10-31", end: "2026-11-08",
    time: "시간 미확인",
    place: "서울대공원 일대", city: "경기 과천", region: "전국",
    cost: "일부 유료", price: "축제 무료 추정, 동물원 입장료 별도", reservation: false, ages: "전연령",
    tags: ["야외", "예술", "축제"],
    url: "https://festival.seoul.go.kr/festival/main/festivalView.do?festacode=465", source: "펀서울 (서울시 축제 포털)",
    note: "단풍 숲속 설치미술·참여형 설치·공연·체험(세부 변동 가능). 바로 옆 국립과천과학관과 같은 날 묶기 좋음.",
    big: true, verified: true
  },
  {
    id: "2026-11-gstar-busan",
    title: "지스타 2026 (G-STAR, 국제게임전시회)",
    start: "2026-11-19", end: "2026-11-22",
    time: "11:00~17:30 (입장 마감 17:00)",
    place: "벡스코 제1·2전시장", city: "부산 해운대구", region: "전국",
    cost: "유료", price: "일반 18,000원 / 청소년(2008년 이후 출생) 8,000원", reservation: true, ages: "전연령 (초등 고학년 이상 추천)",
    tags: ["과학", "축제"],
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
    tags: ["과학", "예술", "축제"],
    url: "https://www.yugacrew.com/crewletter/coex-baby-fair-2026", source: "육아 블로그(유가크루) / 주최 세계전람",
    note: "로봇코딩·AI·쿠킹·공예 체험 부스. 사전등록은 educare.co.kr. 주 대상이 유아~예비초등이라 2학년에겐 다소 어릴 수 있음.",
    big: true, verified: false
  }
];
