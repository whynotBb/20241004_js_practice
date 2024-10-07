// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다 : 레벨설정
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI : UI 참고 - https://www.abcya.com/games/guess_the_number

// 숫자 범위
const minNum = 1;
const maxNum = 100;
// 게임 가능 여부, 시도 숫자 설정
let play = true;
let tryNum = 5;
let playNum = 0;

const playNumTxt = document.getElementById("playNum");
renderHeart();
// 랜덤 숫자 뽑기
const randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
document.getElementById("randomNum").innerText = randomNum;
// 결과 입력
const resultTxt = document.getElementById("resultTxt");
// 유저 입력 input
const userInput = document.getElementById("number");

document.getElementById("form").onsubmit = (e) => {
  e.preventDefault();
  if (play) {
    result(randomNum, userInput);
  }
};

function result(randomNum, userInput) {
  console.log(userInput.value);

  const userNum = Number(userInput.value);
  if (randomNum === userNum) {
    resultTxt.innerText = "success 🎉";
    tryNum = 5;
    renderHeart();
  } else if (randomNum > userNum) {
    resultTxt.innerText = "up 👍";
    tryNum -= 1;
    renderHeart();
  } else {
    resultTxt.innerText = "Down 👎";
    tryNum -= 1;
    renderHeart();
  }
}

function renderHeart() {
  document.querySelector(".heart_bx").innerHTML = "";
  for (let i = 0; i < tryNum; i++) {
    const temp = document.createElement("li");
    temp.innerText = "💜";
    document.querySelector(".heart_bx").append(temp);
  }
}

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", function () {});

function fadeOut(id) {
  const el = document.getElementById(id);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= 0.1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

function fadeIn(el, display) {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += 0.1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
