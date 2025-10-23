// play.jsx
import { gameResult } from "../utils/judgement";

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

const computerChoice = () => {
  const keys = Object.keys(choice);
  const randomKey = Math.floor(Math.random() * keys.length);
  return choice[keys[randomKey]];
};

export const playGame = (userChoice) => {
  const userPick = choice[userChoice];
  const computerPick = computerChoice();
  const result = gameResult(userPick.name, computerPick.name);

  return {
    userPick,
    computerPick,
    result,
  };
};