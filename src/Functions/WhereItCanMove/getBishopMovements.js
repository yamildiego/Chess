import checkPositionXY from "../checkPositionXY";

const getBishopMovements = (board, item, indexX, indexY) => {
  let whereItCanMove = [];

  //LEFTUP
  let leftUp = 1;
  while (checkPositionXY(board, item, indexX - leftUp, indexY + leftUp)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX - leftUp, indexY + leftUp));
    if (board[indexX - leftUp][indexY + leftUp] && board[indexX - leftUp][indexY + leftUp].color !== item.color) leftUp += 7;
    leftUp += 1;
  }

  //LEFTDOWN
  let leftDown = 1;
  while (checkPositionXY(board, item, indexX - leftDown, indexY - leftDown)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX - leftDown, indexY - leftDown));
    if (board[indexX - leftDown][indexY - leftDown] && board[indexX - leftDown][indexY - leftDown].color !== item.color) leftDown += 7;
    leftDown += 1;
  }

  //RIGHTUP
  let rightUp = 1;
  while (checkPositionXY(board, item, indexX + rightUp, indexY + rightUp)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX + rightUp, indexY + rightUp));
    if (board[indexX + rightUp][indexY + rightUp] && board[indexX + rightUp][indexY + rightUp].color !== item.color) rightUp += 7;
    rightUp += 1;
  }

  //RIGHTDOWN
  let rightDown = 1;
  while (checkPositionXY(board, item, indexX + rightDown, indexY - rightDown)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX + rightDown, indexY - rightDown));
    if (board[indexX + rightDown][indexY - rightDown] && board[indexX + rightDown][indexY - rightDown].color !== item.color) rightDown += 7;
    rightDown += 1;
  }

  return whereItCanMove;
};

export default getBishopMovements;
