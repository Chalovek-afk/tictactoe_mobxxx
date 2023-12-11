import Board from "./components/board";
import React from "react";
import checkWinner from "./utils/checkWinner";
import { inject, observer } from 'mobx-react';
import { createAppStore } from "./store/store";
import { AppStoreProvider } from "./store/storeProvider";


@observer class Game extends React.Component {

  render() {
    const appStore = createAppStore();
    return (
      <div className="App">
        {appStore.winner ? (
          <h2>Winner is {appStore.winner}</h2>
        ) : (
          <h2>{`Next Move ${appStore.isXPlaying ? "X" : "O"}`}</h2>
        )}
        <Board />
        <button className="reset-button" onClick={appStore.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default function () {
  return (
    <AppStoreProvider>
      <Game />
    </AppStoreProvider>
  );
}
