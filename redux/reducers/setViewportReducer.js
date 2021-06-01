import { MyAction } from "../actions/actions";
import { States } from "../States";
export const setViewportReducer = (state = [], action) => {
  switch (action.type) {
    case MyAction.GETVIEWPORT:
      return States.map_data;
    case MyAction.RECEIVEDEVENT:
      return action.payload;
    default:
      return States.map_data;
  }
};