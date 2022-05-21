import React from "react";

import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessPawn, faChessBishop, faChessQueen, faChessKing, faChessRook, faChessKnight } from "@fortawesome/free-solid-svg-icons";

import TYPES_OF_PIECES from "../Constants/Types_Of_Pieces";

const pieces = {
  [TYPES_OF_PIECES.PAWN]: faChessPawn,
  [TYPES_OF_PIECES.TOWER]: faChessRook,
  [TYPES_OF_PIECES.HORSE]: faChessKnight,
  [TYPES_OF_PIECES.BISHOP]: faChessBishop,
  [TYPES_OF_PIECES.QUEEN]: faChessQueen,
  [TYPES_OF_PIECES.KING]: faChessKing,
};

const Icon = (props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 70 * (7 - props.y),
        width: "70px",
        height: "70px",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        transform: `rotate(${props.deg}deg)`,
        transition: "all 0.5s ease",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <FontAwesomeIcon
          style={{
            position: "relative",
            fontSize: "35px",
            textAlign: "center",
            width: "100%",
            color: props.item.color === "black" ? "#222" : "white",
            zIndex: 2,
          }}
          icon={pieces[props.item.type]}
        />
        <FontAwesomeIcon
          style={{
            position: "absolute",
            fontSize: "36px",
            left: 0,
            top: 0,
            textAlign: "center",
            width: "100%",
            color: props.item.color === "black" ? "white" : "#222",
            zIndex: 0,
          }}
          icon={pieces[props.item.type]}
        />
      </Box>
    </Box>
  );
};

export default Icon;
