import TYPES from "../Constants/Types";

const board = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

const initialState = {
  player: "white",
  letters,
  board,
  pieceSelected: null,
  pawnToChange: null,
};

export default function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TYPES.SET_BOARD: {
      return { ...state, board: action.board };
    }
    case TYPES.SET_SELECTED: {
      return { ...state, pieceSelected: action.pieceSelected };
    }
    case TYPES.SWITCH_PLAYER: {
      return { ...state, player: state.player === "white" ? "black" : "white" };
    }
    case TYPES.SET_PLAYER: {
      return { ...state, player: action.player };
    }
    case TYPES.SET_PAWN_TO_CHANGE: {
      return { ...state, pawnToChange: action.pawnToChange };
    }
    default:
      return state;
  }
}
