import * as actions from "./game.types";

export const setPlayerName = (name: string): actions.SetPlayerName => {
  return {
    type: actions.SET_PLAYER_NAME,
    payload: name
  };
};

export const setScore = (score: number): actions.SetScore => {
  return {
    type: actions.SET_SCORE,
    payload: score
  };
};

