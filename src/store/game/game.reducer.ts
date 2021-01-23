import * as actions from "./game.types";

interface IState {
  playerName: string,
  playerScore: number | null
}

const initialState: IState = {
  playerName: "",
  playerScore: null
};

export const GameReducer = (
  state: IState = initialState,
  action: actions.GameActions
) => {
  switch (action.type) {
    case actions.SET_PLAYER_NAME: {
      return {
        ...state,
        playerName: action.payload,
      };
    }
    case actions.SET_SCORE: {
      return {
        ...state,
        playerScore: action.payload,
      };
    }
    default:
      return state;
  }
};
