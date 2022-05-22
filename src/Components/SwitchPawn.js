import React, { Component } from "react";
import { connect } from "react-redux";

import TYPES_OF_PIECES from "../Constants/Types_Of_Pieces";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import Icon from "../Components/Icon";

import * as appActions from "../Actions/appActions";

class SwitchPawn extends Component {
  setNewPiece = (item) => this.props.dispatch(appActions.setNewPiece(this.props.board, this.props.pawnToChange, item));

  render() {
    let items = [
      { type: TYPES_OF_PIECES.QUEEN, color: this.props.player },
      { type: TYPES_OF_PIECES.HORSE, color: this.props.player },
      { type: TYPES_OF_PIECES.TOWER, color: this.props.player },
      { type: TYPES_OF_PIECES.BISHOP, color: this.props.player },
    ];

    return (
      <React.Fragment>
        <div style={{ fontSize: "35px", color: "red" }}>{JSON.stringify(this.props.modalSwitchPawnOpen)}</div>
        <Modal open={this.props.modalSwitchPawnOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
              {items.map((item, index) => (
                <Box key={index} onClick={() => this.setNewPiece(item)}>
                  <Icon item={item} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  backgroundColor: "#6f6f6f",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function mapStateToProps(state, props) {
  return {
    modalSwitchPawnOpen: state.configReducer.modalSwitchPawnOpen,
    player: state.appReducer.player,
    board: state.appReducer.board,
    pawnToChange: state.appReducer.pawnToChange,
  };
}
export default connect(mapStateToProps)(SwitchPawn);
