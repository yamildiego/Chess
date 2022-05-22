import checkPositionXY from "../checkPositionXY";

const getHorseMovements = (board, item, indexX, indexY) => {
  let whereItCanMove = [];

  // UPLEFT
  let upLeft = checkPositionXY(board, item, indexX + 2, indexY + 1);
  if (upLeft != null) whereItCanMove.push(upLeft);
  let upLeftTwo = checkPositionXY(board, item, indexX + 1, indexY + 2);
  if (upLeftTwo != null) whereItCanMove.push(upLeftTwo);

  // UPRIGHT
  let upRight = checkPositionXY(board, item, indexX - 2, indexY + 1);
  if (upRight != null) whereItCanMove.push(upRight);
  let upRightTwo = checkPositionXY(board, item, indexX - 1, indexY + 2);
  if (upRightTwo != null) whereItCanMove.push(upRightTwo);

  // DOWNLEFT
  let downLeft = checkPositionXY(board, item, indexX + 2, indexY - 1);
  if (downLeft != null) whereItCanMove.push(downLeft);
  let downLeftTwo = checkPositionXY(board, item, indexX + 1, indexY - 2);
  if (downLeftTwo != null) whereItCanMove.push(downLeftTwo);

  // DOWNRIGHT
  let downRight = checkPositionXY(board, item, indexX - 2, indexY - 1);
  if (downRight != null) whereItCanMove.push(downRight);
  let downRightTwo = checkPositionXY(board, item, indexX - 1, indexY - 2);
  if (downRightTwo != null) whereItCanMove.push(downRightTwo);

  return whereItCanMove;
};

export default getHorseMovements;
