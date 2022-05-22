import TYPES from "../Constants/Types";

const initialState = {
  rotateBoard: false,
  modalSwitchPawnOpen: false,
};

export default function configReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TYPES.SET_MODEL_SWITCH_PAWN_OPEN: {
      return { ...state, modalSwitchPawnOpen: action.modalSwitchPawnOpen };
    }
    default:
      return state;
  }
}
