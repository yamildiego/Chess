import getWherePieceCanMove from "./getWherePieceCanMove";

const updatePiecesCanMove = (oldBoard, positionItemMoved = null, isFirstRun = false) => {
  let board = [];
  oldBoard.forEach((row, indexX) => {
    let newRow = [];
    row.forEach((item, indexY) => {
      let newItem = null;
      if (item !== null) newItem = { ...item, whereItCanMove: getWherePieceCanMove(oldBoard, item, indexX, indexY, isFirstRun) };
      newRow.push(newItem);
    });
    board.push(newRow);
  });

  return board;
};

export default updatePiecesCanMove;
