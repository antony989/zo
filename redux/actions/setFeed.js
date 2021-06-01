import { MyAction } from "./actions";
import { States } from "../States";
export const getFeed = () => {
    return {
      type: MyAction.GETFEED,
    };
};

export const setFeed = (payload) => {
    States.feeds = payload
    return {
      type: MyAction.SETFEED,
      payload: payload
    };
};

export const asyncFeedFetching = (data) => {
    return async function (dispatch) {
        dispatch(getFeed());
        dispatch(setFeed(data));
    }
}