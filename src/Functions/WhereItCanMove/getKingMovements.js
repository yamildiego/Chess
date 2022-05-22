import checkPositionXY from "../checkPositionXY";

const getKingMovements = (board, item, indexX, indexY) => {
  let whereItCanMove = [];
  // UP
  let up = checkPositionXY(board, item, indexX, indexY + 1);
  if (up != null) whereItCanMove.push(up);

  // DOWN
  let down = checkPositionXY(board, item, indexX, indexY - 1);
  if (down != null) whereItCanMove.push(down);

  // RIGHT
  let right = checkPositionXY(board, item, indexX + 1, indexY);
  if (right != null) whereItCanMove.push(right);

  // LEFT
  let left = checkPositionXY(board, item, indexX - 1, indexY);
  if (left != null) whereItCanMove.push(left);

  // UPRIGHT
  let upRight = checkPositionXY(board, item, indexX + 1, indexY + 1);
  if (upRight != null) whereItCanMove.push(upRight);

  // UPLEFT
  let upLeft = checkPositionXY(board, item, indexX - 1, indexY + 1);
  if (upLeft != null) whereItCanMove.push(upLeft);

  // DOWNPRIGHT
  let downRight = checkPositionXY(board, item, indexX + 1, indexY - 1);
  if (downRight != null) whereItCanMove.push(downRight);

  // DOWNLEFT
  let downLeft = checkPositionXY(board, item, indexX - 1, indexY - 1);
  if (downLeft != null) whereItCanMove.push(downLeft);

  return whereItCanMove;
};

export default getKingMovements;
