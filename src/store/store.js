export const createAppStore = (props) => {
  return {
    squares: props.squares || [null, null, null, null, null, null, null, null, null],
    isXPlaying: props.isXPlaying || true,
    winner: props.winner || null,
    winningConfig: props.winningConfig || [],
    getSquare: function (number) {
      return this.squares[number]
    },
    reset: function ()  {
      this.isXPlaying = true;
      this.winner = null;
      this.winningConfig = [];
      this.squares = [null, null, null, null, null, null, null, null, null];
    },
    playCreator: function (number) {
      if (!this.winner) {
        if (this.isXPlaying) {
          this.squares[number] = "X";
        } else {
          this.squares[number] = "O";
        }
      }
    },
  };
};
