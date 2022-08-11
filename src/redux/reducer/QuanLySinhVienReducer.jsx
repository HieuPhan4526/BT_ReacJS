const stateDefault = {
  danhSachSinhVien: [
    {
      maSV: "1",
      hoTen: "Nguyen Van A",
      soDienThoai: "123123123",
      email: "test@gmail.com",
    },
  ],
  sinhVien: {
    values: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
  },
};
export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE": {
      state.sinhVien = { ...state.sinhVien };
      state.sinhVien = action.sinhVienVali;

      // console.log(state.sinhVien);
      return { ...state };
    }
    case "THEM_SINH_VIEN": {
      state.danhSachSinhVien = [...state.danhSachSinhVien, action.sinhVien];
      return { ...state };
    }
    case "XOA_SINH_VIEN": {
      state.danhSachSinhVien = [...state.danhSachSinhVien];
      state.danhSachSinhVien.splice(action.indexDelete, 1);

      return { ...state };
    }
    case "XEM_SINH_VIEN": {
      state.sinhVien = { ...state.sinhVien };
      state.sinhVien.values = action.sinhVienXem;
      return { ...state };
    }
    case "CAP_NHAP_SV": {
      state.danhSachSinhVien = [...state.danhSachSinhVien];
      let indexSVUpdate = state.danhSachSinhVien.findIndex(
        (sinhVien) => sinhVien.maSV === action.sinhVienXem.maSV
      );
      if (indexSVUpdate > -1) {
        state.danhSachSinhVien[indexSVUpdate] = action.sinhVienXem;
      }
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
