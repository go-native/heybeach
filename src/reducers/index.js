import { combineReducers } from "redux";
import beaches from "./beaches";
import user from "./user";
import common from "./common";

export default combineReducers({
  beaches,
  user,
  common
});
