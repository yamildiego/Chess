import React, { Component } from "react";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import * as appActions from "../Actions/appActions";

class NewGame extends Component {
  setNewPiece = (item) => this.props.dispatch(appActions.setNewPiece(this.props.board, this.props.pawnToChange, item));
  newGame = () => this.props.dispatch(appActions.newGame(this.props.board));

  render() {
    return (
      <Modal open={this.props.modalNewGameOpen}>
        <Box sx={style}>
          <Button variant="contained" color="warning" onClick={this.newGame}>
            New Game
          </Button>
        </Box>
      </Modal>
    );
  }
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function mapStateToProps(state, props) {
  return {
    modalNewGameOpen: state.configReducer.modalNewGameOpen,
  };
}
export default connect(mapStateToProps)(NewGame);
