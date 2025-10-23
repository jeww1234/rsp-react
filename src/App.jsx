import { useState } from "react";
import "./App.css";
import Box from "./component/Box/Box";
import Button from "./component/Button/Button";
import { playGame } from "./utils/play";

function App() {
  //박스2개(타이틀,사진,결과)
  //r,s, p 버튼 클릭하면 클리간 값이 박스에 보임
  //r, s, p 버튼 클릭하면 컴퓨터는 랜던 값이 박스에 보임
  //승패에 따라 결과를 보여줌
  //승패결과에 따라 테두리 색 바뀜

  const defaultChoice = {
    name: "Waiting...",
    img: "https://i.namu.wiki/i/Oxg73MRzvQD9DSPoTjU4IFRVensknbLhJoziNhKQ5KCge_QuCZkfDQor6sn10ejQ0TA0pKKFta6uFcHZids62w.webp", // 또는 로딩 이미지
  };

  const [userSelect, setUserSelect] = useState(defaultChoice);
  const [computerSelect, setComputerSelect] = useState(defaultChoice);
  const [result, setResult] = useState("Draw");

  const handlePlay = (userChoice) => {
    const { userPick, computerPick, result } = playGame(userChoice);
    setUserSelect(userPick);
    setComputerSelect(computerPick);
    setResult(result);
  };

  return (
    <div className="main">
      <div className="main-box">
        <Box title="You" item={userSelect} result={result} />
        <Box
          title="Computer"
          item={computerSelect}
          result={
            result === "Win" ? "Lose" : result === "Lose" ? "Win" : "Draw"
          }
        />
      </div>
      <div>
        <Button label="Rock" onClick={() => handlePlay("rock")} />
        <Button label="Scissors" onClick={() => handlePlay("scissors")} />
        <Button label="Paper" onClick={() => handlePlay("paper")} />
      </div>
    </div>
  );
}

export default App;
