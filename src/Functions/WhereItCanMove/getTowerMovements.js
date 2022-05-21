const getTowerMovements = (board, item, indexX, indexY) => {
  let whereICanMove = [];
  let left = 1;
  while (
    (board[indexX + left] && board[indexX + left][indexY] === null) ||
    (board[indexX + left] && board[indexX + left][indexY] && board[indexX + left][indexY].color !== item.color)
  ) {
    whereICanMove.push(`${indexX + left}|${indexY}`);
    if (board[indexX + left][indexY] && board[indexX + left][indexY].color !== item.color) left += 7;
    left += 1;
  }

  let right = 1;
  while (
    (board[indexX - right] && board[indexX - right][indexY] === null) ||
    (board[indexX - right] && board[indexX - right][indexY] && board[indexX - right][indexY].color !== item.color)
  ) {
    whereICanMove.push(`${indexX - right}|${indexY}`);
    if (board[indexX - right][indexY] && board[indexX - right][indexY].color !== item.color) right += 7;
    right += 1;
  }

  let up = 1;
  while (
    (board[indexX] && board[indexX][indexY + up] === null) ||
    (board[indexX] && board[indexX][indexY + up] && board[indexX][indexY + up].color !== item.color)
  ) {
    whereICanMove.push(`${indexX}|${indexY + up}`);
    if (board[indexX][indexY + up] && board[indexX][indexY + up].color !== item.color) up += 7;
    up += 1;
  }

  let down = 1;
  while (
    (board[indexX] && board[indexX][indexY - down] === null) ||
    (board[indexX] && board[indexX][indexY - down] && board[indexX][indexY - down].color !== item.color)
  ) {
    whereICanMove.push(`${indexX}|${indexY - down}`);
    if (board[indexX][indexY - down] && board[indexX][indexY - down].color !== item.color) down += 7;
    down += 1;
  }

  return whereICanMove;
};

export default getTowerMovements;
