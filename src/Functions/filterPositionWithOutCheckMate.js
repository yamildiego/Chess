import _ from "lodash";

import getPosition from "./getPosition";
import updatePiecesCanMove from "./updatePiecesCanMove";
import isItInCheck from "./isItInCheck";

const filterPositionWithOutCheckMate = (board, indexX, indexY, item, whereItCanMove) => {
  let whereItCanMoveFiltered = [];

  whereItCanMove.forEach((positionXY) => {
    let testBoard = _.cloneDeep(board);
    let position = getPosition(positionXY);

    testBoard[indexX][indexY] = null;
    testBoard[position[0]][position[1]] = item;
    testBoard = updatePiecesCanMove(testBoard, item, false);
    if (!isItInCheck(testBoard, item)) whereItCanMoveFiltered.push(positionXY);
  });

  return whereItCanMoveFiltered;
};

export default filterPositionWithOutCheckMate;
