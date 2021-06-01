import { asyncDataReducer } from "./asyncEeventReducer";
import { setViewportReducer } from "./setViewportReducer";
import { setLocationReducer } from "./setLocationReducer";
import { setFeedReducer } from "./setFeedReducer";
import { combineReducers } from "redux";
export const oneReducer = combineReducers({
  events: asyncDataReducer,
  mapviewport: setViewportReducer,
  location: setLocationReducer,
  feeds: setFeedReducer
});
