import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";

const rootReducer = combineReducers({
  //Chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: GioHangReducer,
});

export default rootReducer;
