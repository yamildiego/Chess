import checkPositionXY from "../checkPositionXY";

const getTowerMovements = (board, item, indexX, indexY) => {
  let whereItCanMove = [];

  //RIGHT
  let right = 1;
  while (checkPositionXY(board, item, indexX + right, indexY)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX + right, indexY));
    if (board[indexX + right][indexY] && board[indexX + right][indexY].color !== item.color) right += 7;
    right += 1;
  }

  //LEFT
  let left = 1;
  while (checkPositionXY(board, item, indexX - left, indexY)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX - left, indexY));
    if (board[indexX - left][indexY] && board[indexX - left][indexY].color !== item.color) left += 7;
    left += 1;
  }

  //UP
  let up = 1;
  while (checkPositionXY(board, item, indexX, indexY + up)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX, indexY + up));
    if (board[indexX][indexY + up] && board[indexX][indexY + up].color !== item.color) up += 7;
    up += 1;
  }

  //DOWN
  let down = 1;
  while (checkPositionXY(board, item, indexX, indexY - down)) {
    whereItCanMove.push(checkPositionXY(board, item, indexX, indexY - down));
    if (board[indexX][indexY - down] && board[indexX][indexY - down].color !== item.color) down += 7;
    down += 1;
  }

  return whereItCanMove;
};

export default getTowerMovements;
