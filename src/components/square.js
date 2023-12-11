import React from "react";
import {createAppStore} from "../store/store"

//Question: How to only redender the squares that have been changed

class Square extends React.Component {
  handleClick = (number) => {
    const appStore = createAppStore();
    if (!appStore.winner && !appStore.getSquare(number)) {
      appStore.playCreator(number);
    }
  };
  render() {
    const appStore = createAppStore();
    const { number } = this.props;

    //Check if current square number is part of winningConfig
    let squareClass = "square";
    const isPartOfWinningConfig = appStore.winningConfig.includes(number);
    if (isPartOfWinningConfig) {
      squareClass = "square winner";
    }
    return (
      <div
        className={squareClass}
        onClick={() => {
          this.handleClick(number);
        }}
      >
        {appStore.getSquare(number)}
      </div>
    );
  }
}


export default function () {
  return (
      <Square />
  );
}
