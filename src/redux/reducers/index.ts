import { combineReducers } from "redux";

import postsReducer from "./postsReducer";

const reducers = combineReducers({
 postsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
