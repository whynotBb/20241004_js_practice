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

const randomNum = Math.floor(Math.random() * (maxNum - minNum) + minNum);
const resultBx = document.getElementsByClassName("result_bx")[0];

document.getElementById("form").onsubmit = (e) => {
	e.preventDefault();
	if (play) {
		const userNum = Number(document.getElementById("number").value);
		console.log(randomNum, userNum);
		if (userNum === randomNum) {
			resultBx.innerText = "🎉 success 🎉";
			play = false;
			document.getElementById("number").setAttribute("disabled", true);
			document.getElementById("btn").setAttribute("disabled", true);
		} else if (userNum > randomNum) {
			resultBx.innerHTML = "Down 👎";
			playNumTxt.innerText = playNum;
			if (playNum === tryNum - 1) {
				play = false;
				playNum = 0;
			} else {
				playNum += 1;
			}
		} else if (userNum < randomNum) {
			resultBx.innerHTML = "Up 👍";
			if (playNum === tryNum - 1) {
				play = false;
				playNum = 0;
			} else {
				playNum += 1;
			}
		}
	}
};

const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", function () {});
