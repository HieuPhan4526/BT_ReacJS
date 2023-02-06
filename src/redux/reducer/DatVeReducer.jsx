import { DAT_VE, HUY_VE } from "../Types/BaiTapDatVeTypes";

const stateDatVe = {
  danhSachGheDangDat: [],
};

export const DatVeReducer = (state = stateDatVe, action) => {
  switch (action.type) {
    case DAT_VE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let indexChartFind = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.clickChart.soGhe
      );
      if (indexChartFind > -1) {
        danhSachGheDangDatUpdate.splice(indexChartFind, 1);
      } else {
        danhSachGheDangDatUpdate.push(action.clickChart);
      }
      // console.log(state);
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;
      return { ...state };
    }
    case HUY_VE: {
      let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDatUpdate.findIndex(
        (gheDangDat) => gheDangDat.soGhe === action.soGheClick
      );
      if (index > -1) {
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.danhSachGheDangDat = danhSachGheDangDatUpdate;

      return { ...state };
    }
    default:
      return state;
  }
};
