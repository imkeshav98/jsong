import {
  legacy_createStore as creatStore,
  combineReducers,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { artistReducer } from "./artistData/reducer";
import { songsReducer } from "./songsData/reducer";
import { userReducer } from "./userData/reducer";
import { loadingReducer } from "./loading/reducer";

const rootReducer = combineReducers({
  artists: artistReducer,
  songs: songsReducer,
  user: userReducer,
  loading: loadingReducer,
});

export const store = creatStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
