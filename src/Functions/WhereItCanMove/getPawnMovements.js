// import checkPositionXY from "../checkPositionXY";
const checkPositionXYIsNotNull = (board, item, x, y) =>
  (board[x] && board[x][y] !== null && board[x][y].color !== item.color) || (board[x] && board[x][y] && board[x][y].color !== item.color)
    ? `${x}|${y}`
    : null;

const getPawnMovements = (board, item, indexX, indexY) => {
  let whereItCanMove = [];
  let isWhite = item.color === "white" ? 1 : -1;

  if (board[indexX] && board[indexX][indexY + 1 * isWhite] === null) whereItCanMove.push(`${indexX}|${indexY + 1 * isWhite}`);

  // UPRIGHT
  let upRight = checkPositionXYIsNotNull(board, item, indexX + 1, indexY + 1 * isWhite);
  if (upRight != null) whereItCanMove.push(upRight);

  // UPLEFT
  let upLeft = checkPositionXYIsNotNull(board, item, indexX - 1, indexY + 1 * isWhite);
  if (upLeft != null) whereItCanMove.push(upLeft);

  //FIRST MOVE
  if (
    ((indexY === 1 && item.color === "white") || (indexY === 6 && item.color === "black")) &&
    board[indexX][indexY + 1 * isWhite] === null &&
    board[indexX][indexY + 2 * isWhite] === null
  )
    whereItCanMove.push(`${indexX}|${indexY + 2 * isWhite}`);

  return whereItCanMove;
};

export default getPawnMovements;
