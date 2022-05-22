import TYPES from "../Constants/Types";
import TYPES_OF_PIECES from "../Constants/Types_Of_Pieces";

import updatePiecesCanMove from "../Functions/updatePiecesCanMove";

import * as configActions from "../Actions/configActions";

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

export const setPlayer = (player) => ({
  type: TYPES.SET_PLAYER,
  player,
});

export const setPawnToChange = (pawnToChange) => ({
  type: TYPES.SET_PAWN_TO_CHANGE,
  pawnToChange,
});

export const movePiece = (oldBoard, positionItem, x, y) => {
  return async (dispatch) => {
    let board = [...oldBoard];
    board[x][y] = { ...oldBoard[positionItem[0]][positionItem[1]] };
    board[positionItem[0]][positionItem[1]] = null;

    let newBoard = updatePiecesCanMove(board, [x, y], true);
    dispatch(setBoard(newBoard));

    let item = newBoard[positionItem[0]][positionItem[1]];

    // if (item && item.type === TYPES_OF_PIECES.PAWN && ((item.color === "white" && y === 7) || (item.color === "black" && y === 0)))
    checkIfNeedToSwitchPawn(newBoard, [x, y], dispatch);
    // else {
    // }
  };
};

export const newGame = (boardEmpty) => {
  return async (dispatch) => {
    dispatch(setSelected(null));
    dispatch(setPlayer("white"));

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

    dispatch(setBoard(updatePiecesCanMove(board)));
  };
};

const checkIfNeedToSwitchPawn = (board, position, dispatch, replace = null) => {
  let item = board[position[0]][position[1]];
  if (
    item &&
    item.type === TYPES_OF_PIECES.PAWN &&
    ((item.color === "white" && position[1] === 7) || (item.color === "black" && position[1] === 0))
  ) {
    if (replace === null) {
      dispatch(configActions.setModalSwitchPawnOpen(true));
      dispatch(setPawnToChange(position));
    }
  } else dispatch(switchPlayer());
};

const SwitchPawn = (board, position, dispatch, replace) => {
  board[position[0]][position[1]] = replace;
  dispatch(setBoard(updatePiecesCanMove(board)));
  dispatch(configActions.setModalSwitchPawnOpen(false));
  dispatch(switchPlayer());
};

export const setNewPiece = (board, position, item) => {
  return async (dispatch) => {
    SwitchPawn(board, position, dispatch, item);
  };
};
