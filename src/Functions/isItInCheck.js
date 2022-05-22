import getTheKingPosition from "./getTheKingPosition";

const isItInCheck = (board, item) => {
  let king = getTheKingPosition(board, item.color);
  let indexX = 0;
  let isItInCheck = false;

  while (isItInCheck === false && indexX <= 7) {
    let indexY = 0;

    while (isItInCheck === false && indexY <= 7) {
      let item = board[indexX][indexY];
      if (item && item.whereItCanMove.includes(king)) isItInCheck = true;
      indexY += 1;
    }
    indexX += 1;
  }

  return isItInCheck;
};

export default isItInCheck;
