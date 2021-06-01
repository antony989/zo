import { MyAction } from "./actions";
import { States } from "../States";
export const getLocation = () => {
    return {
      type: MyAction.GETLOCATION,
    };
};

export const setLocation = (payload) => {
    States.location = payload
    return {
      type: MyAction.SETLOCATION,
      payload: payload
    };
};

export const asyncLocationFetching = (data) => {
    return async function (dispatch) {
        dispatch(getLocation());
        dispatch(setLocation(data));
    }
}