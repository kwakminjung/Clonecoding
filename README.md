<h1>
  2022-1 스터디 :: 당근마켓 팀 페이지 클론코딩
</h1>

링크로 바로가기 : <a href="https://kwakminjung.github.io/Clonecoding/">당근마켓 팀</a>

<h3>피드백</h3>
<h5>1차 : index.html-07.08</h5>
<ol>
  <li>✅가장 크게 잡은 콘텐츠로 margin 주기(마지막 가로로 큰 사진 제외)</li>
  <li>✅전체에 top:0, left:0 주기</li>
  <li>✅당근마켓 팀(6명)이 말하는 곳 쭉 나열 후에 overflow: hidden으로 한 뒤, 넘기는 효과 만들기</li>
  <li>✅margin주기보다는 max-width로 깔끔하게 -> 자꾸 #check 에 있는 img에 비해<br> #TeamCulture의 텍스트가 작아져서 텍스트에 min-width로 크기 맞춤</li>
</ol>
<h5>2차 : index.html-07.13</h5>
<ol>
  <li>✅.AllContents에 margin 더 주기</li>
  <li>⬜js object로 배열 만들어서 팀원부분 만들기</li>
  <li>✅팀원부분에 다음, 이전 버튼 만들기(사용자에게 중요한 기능)</li>
  <li>✅팀원부분에 transition: left 0.5s ease-out 이런식으로 넘기는 기능 만들기<br>
  -> 만들기는 했지만 위의 피드백과는 거리가 약간 있음 (다시) (버튼 누르면 스크롤바가 늘어남의 문제 해결하기)<br>
  -> 일단 정석으로(?) 고치지는 않았지만 넘길때 배너가 .IntroDetail 뒤로 가는 일이 생겨서 z-index 로 뒤로 보내고<br>
  marign위로 올라가는 일이 생겨서 hidden을 넣었다가 뒤 두 그룹이 사라지는 일이 생겨서 여러가지 만지다가 나오긴 했음 그치만 넘길 때 마다
  마진 뒤로 가버려서 js를 수정해서 100만큼이 아니라 84만큼(, 168만큼) 움직이도록 함 아마 나머지 16vw (8vw, 8vw)는 마진인 듯 함</li>
  <li>✅행간조절하기 line-height로 조절 <br>
  -> 컴에 따라서 다를 수 있으므로 텍스트에는 항상 line-height: normal 주는게 맞는 듯...?
  <br>(normal로 주면 또 다를거 같아서 w3school 에서 추천한 1.6에서 1.4로 조절하긴 함) + word-spacing: 1px</li>
  <li>✅바로가기 아이콘 바꾸기</li>
</ol>
<h5>3차 : index.html-07.18</h5>
<ol>
  <li>✅넘기는 아이콘 hover시에 색깔 회색으로 변경</li>
  <li>⬜아이콘 위치 다시 (넘기는 곳 콘텐츠 안에 넣어서 옆으로 빼면 됨)</li>
  <li>⬜미디어 쿼리 넣어보기..??</li>
  <li>⬜버튼 다시넣기 (깨짐)</li>
  <li>⬜버튼에 넣은 js 다시 하기</li>
</ol>


<h3>앞으로 해야 할 일</h3>
<ol>
  <li>⬜팀원 넘어가는 부분 수정</li>
  <li>✅스크롤바가 길어지는게 아니라 넘어갈 수 있도록</li>
  <li>팀 문화, 채용공고, 자주 묻는 질문, IR 구현</li>
  <li>mediaquery는 나중에</li>
</ol>

<h3>기간</h3>
<ul>
  <li>1차 : 22.7.1 ~ 8</li>
  <li>1차 피드백 : 22.7.8</li>
  <li>2차 : 22.7.8 ~ 13</li>
  <li>2차 피드백 : 22.7.13</li>
  <li>3차 : 22.7.13 ~ 18</li>
  <li>3차 피드백 : 22.7.18</li>
  <li>4차 : 22.7.18 ~</li>
</ul>
<h3>인원 </h3>1 명
