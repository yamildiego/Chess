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

export const movePiece = (oldBoard, positionItem, x, y) => {
  return async (dispatch) => {
    let board = [...oldBoard];
    board[x][y] = { ...oldBoard[positionItem[0]][positionItem[1]] };
    board[positionItem[0]][positionItem[1]] = null;

    dispatch(updatePiecesCanMove(board));

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

    let board = [
      [tower, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...tower, color: "black" }],
      [horse, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...horse, color: "black" }],
      [bishop, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...bishop, color: "black" }],
      [queen, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...queen, color: "black" }],
      [king, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...king, color: "black" }],
      [bishop, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...bishop, color: "black" }],
      [horse, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...horse, color: "black" }],
      [tower, pawn, null, null, null, null, { ...pawn, color: "black" }, { ...tower, color: "black" }],
    ];

    dispatch(updatePiecesCanMove(board));
  };
};

export const updatePiecesCanMove = (oldBoard) => {
  return async (dispatch) => {
    let board = [];
    console.log(oldBoard);
    console.log(oldBoard);
    console.log(oldBoard);
    console.log(oldBoard);
    console.log(oldBoard);
    console.log(oldBoard);
    console.log(oldBoard);
    oldBoard.forEach((row, indexX) => {
      let newRow = [];
      row.forEach((item, indexY) => {
        let newItem = null;
        if (item !== null) newItem = { ...item, whereItCanMove: getWherePieceCanMove(oldBoard, item, indexX, indexY) };
        newRow.push(newItem);
      });
      board.push(newRow);
    });

    dispatch(setBoard(board));
  };
};

const getWherePieceCanMove = (board, item, indexX, indexY) => {
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
      break;
    case TYPES_OF_PIECES.KING:
      whereItCanMove = getKingMovements(board, item, indexX, indexY);
      break;
    default:
      break;
  }
  return whereItCanMove;
};

// const isItInCheck = (board, item, index) => {
//   let king = getTheKingPosition(board, item.color);
//   let x = 0;
//   let y = 0;
//   let isItInCheck = false;

//   while (isItInCheck === false && x < 7) {
//     while (isItInCheck === false && y < 7) {
//       let item = board[x][y];
//       if (item && item.whereItCanMove.includes(king)) isItInCheck = true;
//       y += 1;
//     }
//     x += 1;
//   }
// };

// const getTheKingPosition = (board, color) => {
//   let king = null;
//   let x = 0;
//   let y = 0;

//   while (king === null && x < 7) {
//     while (king === null && y < 7) {
//       let item = board[x][y];
//       if (item && item.color === color && item.type === TYPES_OF_PIECES.KING) king = `${x}|${y}`;
//       y += 1;
//     }
//     x += 1;
//   }

//   return king;
// };
