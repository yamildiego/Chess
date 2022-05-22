import TYPES_OF_PIECES from "../Constants/Types_Of_Pieces";

const getTheKingPosition = (board, color) => {
  let king = null;
  let indexX = 0;

  while (king === null && indexX <= 7) {
    let indexY = 0;
    while (king === null && indexY <= 7) {
      let item = board[indexX][indexY];
      if (item && item.color === color && item.type === TYPES_OF_PIECES.KING) {
        king = `${indexX}|${indexY}`;
      }
      indexY += 1;
    }
    indexX = indexX + 1;
  }

  return king;
};

export default getTheKingPosition;
