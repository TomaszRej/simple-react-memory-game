export const SET_PLAYER_NAME = "SET_PLAYER_NAME"

export interface SetPlayerName {
  type: typeof SET_PLAYER_NAME;
  payload: string;
}

export const SET_SCORE = "SET_SCORE"

export interface SetScore {
  type: typeof SET_SCORE;
  payload: number;
}


export type GameActions =
  | SetPlayerName
  | SetScore

