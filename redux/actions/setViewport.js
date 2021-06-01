import { MyAction } from "./actions";
import { States } from "../States";
export const getViewport = () => {
    return {
      type: MyAction.GETVIEWPORT,
    };
};

export const setViewport = (payload) => {
    States.map_data = payload
    return {
      type: MyAction.SETVIEWPORT,
      payload: payload
    };
};

export const asyncViewPortFetching = (data) => {
    return async function (dispatch) {
        dispatch(getViewport());
        dispatch(setViewport(data));
    }
}