const getBishopMovements = (board, item, indexX, indexY) => {
  let whereICanMove = [];
  let leftUp = 1;
  while (
    (board[indexX + leftUp] && board[indexX + leftUp][indexY + leftUp] === null) ||
    (board[indexX + leftUp] && board[indexX + leftUp][indexY + leftUp] && board[indexX + leftUp][indexY + leftUp].color !== item.color)
  ) {
    whereICanMove.push(`${indexX + leftUp}|${indexY + leftUp}`);
    if (board[indexX + leftUp][indexY + leftUp] && board[indexX + leftUp][indexY + leftUp].color !== item.color) leftUp += 7;
    leftUp += 1;
  }

  let rightUp = 1;
  while (
    (board[indexX - rightUp] && board[indexX - rightUp][indexY + rightUp] === null) ||
    (board[indexX - rightUp] && board[indexX - rightUp][indexY + rightUp] && board[indexX - rightUp][indexY + rightUp].color !== item.color)
  ) {
    whereICanMove.push(`${indexX - rightUp}|${indexY + rightUp}`);
    if (board[indexX - rightUp][indexY + rightUp] && board[indexX - rightUp][indexY + rightUp].color !== item.color) rightUp += 7;
    rightUp += 1;
  }

  let leftDown = 1;
  while (
    (board[indexX + leftDown] && board[indexX + leftDown][indexY - leftDown] === null) ||
    (board[indexX + leftDown] &&
      board[indexX + leftDown][indexY - leftDown] &&
      board[indexX + leftDown][indexY - leftDown].color !== item.color)
  ) {
    whereICanMove.push(`${indexX + leftDown}|${indexY - leftDown}`);
    if (board[indexX + leftDown][indexY - leftDown] && board[indexX + leftDown][indexY - leftDown].color !== item.color) leftDown += 7;
    leftDown += 1;
  }

  let rightDown = 1;
  while (
    (board[indexX - rightDown] && board[indexX - rightDown][indexY - rightDown] === null) ||
    (board[indexX - rightDown] &&
      board[indexX - rightDown][indexY - rightDown] &&
      board[indexX - rightDown][indexY - rightDown].color !== item.color)
  ) {
    whereICanMove.push(`${indexX - rightDown}|${indexY - rightDown}`);
    if (board[indexX - rightDown][indexY - rightDown] && board[indexX - rightDown][indexY - rightDown].color !== item.color) rightDown += 7;
    rightDown += 1;
  }

  return whereICanMove;
};

export default getBishopMovements;
