import { MyAction } from "./actions";

export const fetchEvent = () => {
    return {
      type: MyAction.EVENT,
    };
};
export const recieveEvent = (payload) => {
    return {
      type: MyAction.RECEIVEDEVENT,
      payload: payload
    };
};

export const asyncEventFetching = (data) => {
    return async function (dispatch) {
        dispatch(fetchEvent())
        dispatch(recieveEvent(data));
    }
}