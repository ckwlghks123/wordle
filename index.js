function cardRender(current, result) {
  const currentChance = document.querySelectorAll(".cards")[result.length];
  const alphabet = currentChance.children;

  currentChance.innerHTML = `
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
  `;

  current.map((e, i) => {
    alphabet[i].innerText = e;
    alphabet[i].classList.add("word-input");
  });
}

function handleClick(e, current, result) {
  console.log(e.target.textContent);
  current.push(e.target.textContent);
  cardRender(current, result);
}

function init() {
  const currentArr = [];
  const resultArr = [];
  console.log("game start");
  window.addEventListener("click", (e) =>
    handleClick(e, currentArr, resultArr)
  );
}

init();

// TODO
// 1. 글자지우기 기능
// 2. 키보드로 글자입력기능
// 3. 엔터누르면 result에 current 푸쉬해서 입력
// 4. 정답 단어 생성
// 5. result 단어들이랑 정답 단어 비교해서 정답단어의 알파벳과자리가
//    정확히 일치하면 초록색 알파벳만 일치하면 노란색으로 표시
// 6. 매 찬스마다 알파벳 일치여부 키보드에 표시 틀린것도 표시
