import { MyAction } from "../actions/actions";

export const asyncDataReducer = (state = [], action) => {
  switch (action.type) {
    case MyAction.EVENT:
      return state;
    case MyAction.RECEIVEDEVENT:
      return action.payload;
    default:
      return state;
  }
};