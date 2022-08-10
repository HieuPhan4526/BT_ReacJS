import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";
import { QLSVLifeReducer } from "./QLSVLifeReducer";

const rootReducer = combineReducers({
  //Chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: GioHangReducer,
  QuanLySinhVienReducer: QuanLySinhVienReducer,
  QLSVLifeReducer: QLSVLifeReducer,
});

export default rootReducer;
