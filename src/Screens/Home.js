import React, { Component } from "react";
import { connect } from "react-redux";

// import ButtonGroup from "@mui/material/ButtonGroup";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Icon from "../Components/Icon";

import * as appActions from "../Actions/appActions";

import white from "../Assets/white.png";
import black from "../Assets/black.png";
import background from "../Assets/background.jpg";

class Home extends Component {
  state = { deg: 0 };

  newGame = () => this.props.dispatch(appActions.newGame(this.props.board));

  rotate = () => this.setState({ deg: this.state.deg === 0 ? 180 : 0 });

  getPosition = (xAndy) => xAndy.split("|");

  getItem = (position) => (this.props.board[position[0]][position[1]] != null ? this.props.board[position[0]][position[1]] : null);

  handleOnClick = (item, x, y) => {
    if (item !== null) {
      if (this.props.pieceSelected !== null) {
        if (item.color === this.props.player) {
          this.props.dispatch(appActions.setSelected(`${x}|${y}`));
        } else {
          this.checkIfIsMoving(item, x, y);
        }
      } else if (item.color === this.props.player) this.props.dispatch(appActions.setSelected(`${x}|${y}`));
    } else {
      if (this.props.pieceSelected !== null) this.checkIfIsMoving(item, x, y);
    }
  };

  checkIfIsMoving = (item, x, y) => {
    let positionOldItem = this.getPosition(this.props.pieceSelected);
    let oldItem = this.getItem(positionOldItem);

    if (oldItem !== null && oldItem.whereICanMove.includes(`${x}|${y}`)) {
      if (item == null || (item !== null && item.color !== this.props.player))
        this.props.dispatch(appActions.movePiece(this.props.board, positionOldItem, x, y));
    } else this.props.dispatch(appActions.setSelected(null));
  };

  render() {
    let whereICanMove = [];
    if (this.props.pieceSelected !== null) {
      let position = this.getPosition(this.props.pieceSelected);
      let itemSelected = this.getItem(position);
      whereICanMove = itemSelected !== null ? itemSelected.whereICanMove : [];
    }

    return (
      <div style={styles.container}>
        <div
          style={{ position: "absolute", zIndex: 10, color: "red", fontSize: "25px", top: "100px", background: "white" }}
          onClick={this.newGame}
        >
          New game
        </div>
        <div
          style={{ position: "absolute", zIndex: 10, color: "red", fontSize: "25px", top: "200px", background: "white" }}
          onClick={this.rotate}
        >
          Rotate
        </div>
        <Box sx={{ transform: `rotate(${this.state.deg}deg)` }}>
          <Box sx={styles.board}>
            <Box sx={styles.framework}>
              {this.props.board.map((row, indexX) => {
                return (
                  <Stack direction="row" key={indexX}>
                    <Stack direction="column-reverse">
                      {row.map((item, indexY) => {
                        return (
                          <Box
                            key={indexY}
                            onClick={() => this.handleOnClick(item, indexX, indexY)}
                            sx={
                              (indexX + indexY) % 2 === 0
                                ? {
                                    ...styles.box,
                                    background: whereICanMove.includes(`${indexX}|${indexY}`) ? "red" : `url('${white}')`,
                                  }
                                : { ...styles.box, background: whereICanMove.includes(`${indexX}|${indexY}`) ? "red" : `url('${black}')` }
                            }
                          >
                            {`${indexX}|${indexY}`}
                            {item && <Icon item={item} deg={this.state.deg} x={indexX} y={indexY} />}
                          </Box>
                        );
                      })}
                    </Stack>
                  </Stack>
                );
              })}
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    backgroundImage: `url('${background}')`,
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
  },
  board: {
    justifyContent: "center",
    display: "flex",
  },
  framework: {
    border: "4px solid #9e5e3d",
    display: "flex",
    position: "relative",
  },
  box: {
    width: "70px",
    height: "70px",
  },
};

function mapStateToProps(state, props) {
  return {
    player: state.appReducer.player,
    board: state.appReducer.board,
    pieceSelected: state.appReducer.pieceSelected,
  };
}

export default connect(mapStateToProps)(Home);
