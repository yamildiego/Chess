import TYPES_OF_PIECES from "../Constants/Types_Of_Pieces";
import filterPositionWithOutCheckMate from "./filterPositionWithOutCheckMate";

import getPawnMovements from "./WhereItCanMove/getPawnMovements";
import getTowerMovements from "./WhereItCanMove/getTowerMovements";
import getBishopMovements from "./WhereItCanMove/getBishopMovements";
import getHorseMovements from "./WhereItCanMove/getHorseMovements";
import getKingMovements from "./WhereItCanMove/getKingMovements";

const getWherePieceCanMove = (board, item, indexX, indexY, isFirstRun) => {
  let whereItCanMove = [];
  switch (item.type) {
    case TYPES_OF_PIECES.PAWN:
      whereItCanMove = getPawnMovements(board, item, indexX, indexY, isFirstRun);
      break;
    case TYPES_OF_PIECES.TOWER:
      whereItCanMove = getTowerMovements(board, item, indexX, indexY, isFirstRun);
      break;
    case TYPES_OF_PIECES.BISHOP:
      whereItCanMove = getBishopMovements(board, item, indexX, indexY, isFirstRun);
      break;
    case TYPES_OF_PIECES.QUEEN:
      whereItCanMove = getBishopMovements(board, item, indexX, indexY, isFirstRun).concat(
        getTowerMovements(board, item, indexX, indexY, isFirstRun)
      );
      break;
    case TYPES_OF_PIECES.HORSE:
      whereItCanMove = getHorseMovements(board, item, indexX, indexY, isFirstRun);
      break;
    case TYPES_OF_PIECES.KING:
      whereItCanMove = getKingMovements(board, item, indexX, indexY, isFirstRun);
      break;
    default:
      break;
  }

  return isFirstRun ? filterPositionWithOutCheckMate(board, indexX, indexY, item, whereItCanMove) : whereItCanMove;
};

export default getWherePieceCanMove;
