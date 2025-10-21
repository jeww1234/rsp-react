import { useState } from "react";
import "./App.css";
import Box from "./component/Box/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://img.seoul.co.kr/img/upload/2020/04/01/SSI_20200401150529_O2.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://s.alicdn.com/@sc04/kf/U44cc6de541df4a8d89ec07eb4c5e329bZ.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://indigo.co.kr/web/product/big/201901/723b89db0dc066aec54f9d1b1de528c5.jpg",
  },
};

function App() {
  //박스2개(타이틀,사진,결과)
  //r,s, p 버튼 클릭하면 클리간 값이 박스에 보임
  //r, s, p 버튼 클릭하면 컴퓨터는 랜던 값이 박스에 보임
  //승패에 따라 결과를 보여줌
  //승패결과에 따라 테두리 색 바뀜

  const [userSelect, setUserSelect] = useState(null)

  const play = (userChoice) =>{
    setUserSelect(choice[userChoice])
  }

  return (
    <div className="main">
      <div className="main-box">
        <Box title="You" item={userSelect}/>
        {/* <Box title="Computer" /> */}
      </div>

      <div>
        <button onClick={()=>play("rock")}>Rock</button>
        <button onClick={()=>play("scissors")}>Scissors</button>
        <button onClick={()=>play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
