import { combineReducers, createStore } from "redux";
import {GameReducer} from './game/game.reducer';

export const reducer = combineReducers({
  gameData: GameReducer,
});

export type AppState = ReturnType<typeof reducer>;


export default createStore(
  reducer
);


