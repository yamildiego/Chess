import TYPES from "../Constants/Types";

const initialState = {
  rotateBoard: false,
  modalSwitchPawnOpen: false,
  modalNewGameOpen: true,
};

export default function configReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TYPES.SET_MODEL_SWITCH_PAWN_OPEN: {
      return { ...state, modalSwitchPawnOpen: action.modalSwitchPawnOpen };
    }
    case TYPES.SET_MODEL_NEW_GAME_OPEN: {
      return { ...state, modalNewGameOpen: action.modalNewGameOpen };
    }
    default:
      return state;
  }
}
