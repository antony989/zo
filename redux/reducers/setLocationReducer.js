import { MyAction } from "../actions/actions";
import { States } from "../States";
export const setLocationReducer = (state = [], action) => {
  switch (action.type) {
    case MyAction.GETLOCATION:
      return States.location;
    case MyAction.RECEIVEDEVENT:
      return action.payload;
    default:
      return States.location;
  }
};