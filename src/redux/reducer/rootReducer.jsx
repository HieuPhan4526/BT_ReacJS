import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { QuanLySinhVienReducer } from "./QuanLySinhVienReducer";

const rootReducer = combineReducers({
  //Chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: GioHangReducer,
  QuanLySinhVienReducer: QuanLySinhVienReducer,
});

export default rootReducer;
