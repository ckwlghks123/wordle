function inputRender(current, result) {
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

function handleInput(text, current, result) {
  current.push(text);
  inputRender(current, result);
}

function handleClick(e, current, result) {
  if (current.length > 4) return;
  if (e.target.className !== "key") return;
  handleInput(e.target.textContent, current, result);
}

function handleKeyDown(e, current, result) {
  e.preventDefault();
  if (e.which === 8) {
    current.pop();
    inputRender(current, result);
  }
  if (e.which > 186) return;
  if (current.length > 4) return;
  if (e.type !== "keydown") return;
  if (e.key.length > 1) return;
  handleInput(e.key.toUpperCase(), current, result);
}

function init() {
  console.log("game start");
  const currentArr = [];
  const resultArr = [];
  window.addEventListener("click", (e) =>
    handleClick(e, currentArr, resultArr)
  );
  window.addEventListener("keydown", (e) =>
    handleKeyDown(e, currentArr, resultArr)
  );
}

init();

// TODO
// 1. 글자지우기 기능
// 3. 엔터누르면 result에 current 푸쉬해서 입력
// 4. 정답 단어 생성
// 5. result 단어들이랑 정답 단어 비교해서 정답단어의 알파벳과자리가
//    정확히 일치하면 초록색 알파벳만 일치하면 노란색으로 표시
// 6. 매 찬스마다 알파벳 일치여부 키보드에 표시 틀린것도 표시
