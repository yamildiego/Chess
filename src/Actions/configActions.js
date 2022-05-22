import TYPES from "../Constants/Types";

export const setModalSwitchPawnOpen = (modalSwitchPawnOpen) => ({
  type: TYPES.SET_MODEL_SWITCH_PAWN_OPEN,
  modalSwitchPawnOpen,
});

export const setModalNewGameOpen = (modalNewGameOpen) => ({
  type: TYPES.SET_MODEL_NEW_GAME_OPEN,
  modalNewGameOpen,
});
