import TYPES from "../Constants/Types";
import TYPES_OF_PIECES from "../Constants/Types_Of_Pieces";
import getPawnMovements from "../Functions/WhereItCanMove/getPawnMovements";
import getTowerMovements from "../Functions/WhereItCanMove/getTowerMovements";
import getBishopMovements from "../Functions/WhereItCanMove/getBishopMovements";
import getHorseMovements from "../Functions/WhereItCanMove/getHorseMovements";
import getKingMovements from "../Functions/WhereItCanMove/getKingMovements";

export const setBoard = (board) => ({
  type: TYPES.SET_BOARD,
  board,
});

export const setSelected = (pieceSelected) => ({
  type: TYPES.SET_SELECTED,
  pieceSelected,
});

export const switchPlayer = () => ({
  type: TYPES.SWITCH_PLAYER,
});

export const movePiece = (board, positionItem, x, y) => {
  return async (dispatch) => {
    board[x][y] = { ...board[positionItem[0]][positionItem[1]] };
    board[positionItem[0]][positionItem[1]] = null;

    dispatch(updateWhereItCanMove(board));
    // dispatch(switchPlayer());
  };
};

export const newGame = (boardEmpty) => {
  return async (dispatch) => {
    dispatch(setSelected(null));

    let pawn = { type: TYPES_OF_PIECES.PAWN, color: "white", whereItCanMove: [] };
    let tower = { type: TYPES_OF_PIECES.TOWER, color: "white", whereItCanMove: [] };
    let horse = { type: TYPES_OF_PIECES.HORSE, color: "white", whereItCanMove: [] };
    let bishop = { type: TYPES_OF_PIECES.BISHOP, color: "white", whereItCanMove: [] };
    let queen = { type: TYPES_OF_PIECES.QUEEN, color: "white", whereItCanMove: [] };
    let king = { type: TYPES_OF_PIECES.KING, color: "white", whereItCanMove: [] };

    let board = [];

    boardEmpty.forEach((row, indexX) => {
      let newRow = [];
      row.forEach((item, indexY) => {
        let newItem = null;
        if (indexY === 1) newItem = { ...pawn };
        if (indexY === 6) newItem = { ...pawn, color: "black" };

        if (indexY === 0) {
          if (indexX === 0 || indexX === 7) newItem = { ...tower };
          if (indexX === 1 || indexX === 6) newItem = { ...horse };
          if (indexX === 2 || indexX === 5) newItem = { ...bishop };
          if (indexX === 2 || indexX === 5) newItem = { ...bishop };
          if (indexX === 3) newItem = { ...queen };
          if (indexX === 4) newItem = { ...king };
        }
        if (indexY === 7) {
          if (indexX === 0 || indexX === 7) newItem = { ...tower, color: "black" };
          if (indexX === 1 || indexX === 6) newItem = { ...horse, color: "black" };
          if (indexX === 2 || indexX === 5) newItem = { ...bishop, color: "black" };
          if (indexX === 2 || indexX === 5) newItem = { ...bishop, color: "black" };
          if (indexX === 3) newItem = { ...queen, color: "black" };
          if (indexX === 4) newItem = { ...king, color: "black" };
        }

        newRow.push(newItem);
      });

      board.push(newRow);
    });

    dispatch(updateWhereItCanMove(board));
  };
};

export const updateWhereItCanMove = (oldBoard) => {
  return async (dispatch) => {
    let board = [];
    oldBoard.forEach((row, indexX) => {
      let newRow = [];
      row.forEach((item, indexY) => {
        let newItem = null;
        if (item !== null) newItem = { ...item, whereItCanMove: getWhereItCanMove(oldBoard, item, indexX, indexY) };
        newRow.push(newItem);
      });
      board.push(newRow);
    });

    dispatch(setBoard(board));
  };
};

const getWhereItCanMove = (board, item, indexX, indexY) => {
  let whereItCanMove = [];
  switch (item.type) {
    case TYPES_OF_PIECES.PAWN:
      whereItCanMove = getPawnMovements(board, item, indexX, indexY);
      break;
    case TYPES_OF_PIECES.TOWER:
      whereItCanMove = getTowerMovements(board, item, indexX, indexY);
      break;
    case TYPES_OF_PIECES.BISHOP:
      whereItCanMove = getBishopMovements(board, item, indexX, indexY);
      break;
    case TYPES_OF_PIECES.QUEEN:
      whereItCanMove = getBishopMovements(board, item, indexX, indexY).concat(getTowerMovements(board, item, indexX, indexY));
      break;
    case TYPES_OF_PIECES.HORSE:
      whereItCanMove = getHorseMovements(board, item, indexX, indexY);
    case TYPES_OF_PIECES.KING:
      whereItCanMove = getKingMovements(board, item, indexX, indexY);
      break;
    default:
      break;
  }
  return whereItCanMove;
};
