export const gameResult = (user, computer) => {
  if (user === computer) return "Draw";
  else if (
    (user === "Rock" && computer === "Scissors") ||
    (user === "Scissors" && computer === "Paper") ||
    (user === "Paper" && computer === "Rock")
  )
    return "Win";
  else return "Lose";
};
