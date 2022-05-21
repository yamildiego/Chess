const getPawnMovements = (board, item, indexX, indexY) => {
  let whereICanMove = [];
  let isWhite = item.color === "white" ? 1 : -1;
  if (board[indexX] && board[indexX][indexY + 1 * isWhite] === null) whereICanMove.push(`${indexX}|${indexY + 1 * isWhite}`);

  if (
    board[indexX + 1] &&
    board[indexX + 1][indexY + 1 * isWhite] !== null &&
    board[indexX + 1][indexY + 1 * isWhite] &&
    board[indexX + 1][indexY + 1 * isWhite].color !== item.color
  )
    whereICanMove.push(`${indexX + 1}|${indexY + 1 * isWhite}`);
  if (
    board[indexX - 1] &&
    board[indexX - 1][indexY + 1 * isWhite] !== null &&
    board[indexX - 1][indexY + 1 * isWhite] &&
    board[indexX - 1][indexY + 1 * isWhite].color !== item.color
  )
    whereICanMove.push(`${indexX - 1}|${indexY + 1 * isWhite}`);
  if (
    ((indexY === 1 && isWhite === 1) || (indexY === 6 && isWhite === -1)) &&
    board[indexX][indexY + 1 * isWhite] === null &&
    board[indexX][indexY + 2 * isWhite] === null
  )
    whereICanMove.push(`${indexX}|${indexY + 2 * isWhite}`);

  return whereICanMove;
};

export default getPawnMovements;
