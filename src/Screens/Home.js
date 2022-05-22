import React, { Component } from "react";
import { connect } from "react-redux";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import Icon from "../Components/Icon";
import NewGame from "../Components/NewGame";
import SwitchPawn from "../Components/SwitchPawn";

import getPosition from "../Functions/getPosition";

import * as appActions from "../Actions/appActions";

import white from "../Assets/white.png";
import black from "../Assets/black.png";
import background from "../Assets/background.jpg";

class Home extends Component {
  state = { deg: 0 };

  componentDidUpdate(oldProps) {
    if (oldProps.player !== this.props.player) this.rotate(this.props.player === "white" ? 0 : 180);
  }

  rotate = (deg) => this.setState({ deg });

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
    let positionOldItem = getPosition(this.props.pieceSelected);
    let oldItem = this.getItem(positionOldItem);

    if (oldItem !== null && oldItem.whereItCanMove.includes(`${x}|${y}`)) {
      if (item == null || (item !== null && item.color !== this.props.player))
        this.props.dispatch(appActions.movePiece(this.props.board, positionOldItem, x, y));
    } else this.props.dispatch(appActions.setSelected(null));
  };

  render() {
    let whereItCanMove = [];
    if (this.props.pieceSelected !== null) {
      let position = getPosition(this.props.pieceSelected);
      let itemSelected = this.getItem(position);
      whereItCanMove = itemSelected !== null ? itemSelected.whereItCanMove : [];
    }

    return (
      <div style={styles.container}>
        <NewGame />
        <SwitchPawn />
        <Box sx={this.props.rotateBoard ? { transform: `rotate(${this.state.deg}deg)`, transition: "all 0.5s ease" } : {}}>
          <Box sx={styles.board}>
            {!this.props.modalNewGameOpen && (
              <Box sx={styles.containerPlayer}>
                Player: <span style={{ textTransform: "uppercase", color: this.props.player }}>{this.props.player}</span>
              </Box>
            )}
            <Box sx={styles.framework}>
              {this.props.board.map((row, indexX) => {
                return (
                  <Stack direction="column-reverse" key={indexX}>
                    {row.map((item, indexY) => {
                      return (
                        <Box
                          key={indexY}
                          onClick={() => this.handleOnClick(item, indexX, indexY)}
                          sx={
                            (indexX + indexY) % 2 === 0
                              ? {
                                  ...styles.box,
                                  background: whereItCanMove.includes(`${indexX}|${indexY}`) ? "#c7cb67" : `url('${white}')`,
                                }
                              : {
                                  ...styles.box,
                                  background: whereItCanMove.includes(`${indexX}|${indexY}`) ? "#a4931b" : `url('${black}')`,
                                }
                          }
                        >
                          {item && (
                            <Box
                              sx={{
                                position: "absolute",
                                top: 70 * (7 - indexY),
                                width: "70px",
                                height: "70px",
                                justifyContent: "center",
                                display: "flex",
                                flexDirection: "column",
                                transform: this.props.rotateBoard ? `rotate(${this.state.deg}deg)` : `rotate(0deg)`,
                              }}
                            >
                              <Icon item={item} />
                            </Box>
                          )}
                        </Box>
                      );
                    })}
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
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
  },
  containerPlayer: {
    fontSize: "15px",
    position: "absolute",
    color: "white",
    zIndex: 10,
    fontWeight: "bold",
    marginTop: "-40px",
    padding: "8px",
    borderRadius: "5px",
    backgroundColor: "#ed6c02",
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
    rotateBoard: state.configReducer.rotateBoard,
    modalNewGameOpen: state.configReducer.modalNewGameOpen,
  };
}

export default connect(mapStateToProps)(Home);
