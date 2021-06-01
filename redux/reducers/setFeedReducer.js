import { MyAction } from "../actions/actions";
import { States } from "../States";
export const setFeedReducer = (state = [], action) => {
  switch (action.type) {
    case MyAction.GETFEED:
      return States.feeds;
    case MyAction.RECEIVEDEVENT:
      return action.payload;
    default:
      return States.feeds;
  }
};