import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "./components/Box";
import rockImg from "./assets/rock.png";
import scissorsImg from "./assets/scissors.png";
import paperImg from "./assets/paper.png";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택
// 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 결정
// 6. 승패 결과에 따라 테두리 색 결정 (승리-초록, 패배-빨강, 비김-검은색)

const choice = {
  rock: {
    name: "Rock",
    img: rockImg,
  },
  scissors: {
    name: "Scissors",
    img: scissorsImg,
  },
  paper: {
    name: "Paper",
    img: paperImg,
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const winTable = {
    Rock: "Scissors",
    Scissors: "Paper",
    Paper: "Rock",
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name == computer.name) return "tie";
    return winTable[user.name] === computer.name ? "Win" : "Lose";
  };

  const randomChoice = () => {
    // Object.keys -> 객체에 키 값만 뽑아서 배열로 만들어주는 함수
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
