const checkPositionXY = (board, item, x, y) =>
  (board[x] && board[x][y] === null) || (board[x] && board[x][y] && board[x][y].color !== item.color) ? `${x}|${y}` : null;

export default checkPositionXY;
