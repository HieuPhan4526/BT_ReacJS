import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { DatVeReducer } from "./DatVeReducer";

const rootReducer = combineReducers({
  //Chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: GioHangReducer,
  DatVeReducer: DatVeReducer,
});

export default rootReducer;
