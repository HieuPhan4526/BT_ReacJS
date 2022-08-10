const stateDefault = {
  danhSachSinhVien: [
    {
      maSV: "1",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "1234567890",
      email: "text@gmail.com",
    },
    {
      maSV: "2",
      hoTen: "Nguyễn Thị B",
      soDienThoai: "1234567890",
      email: "text123123@gmail.com",
    },
  ],
  sinhVienChiTiet: {
    maSV: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
  },
};

export const QLSVLifeReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      state.danhSachSinhVien = [...state.danhSachSinhVien, action.sinhVien];
      return { ...state };
    }
    case "XOA_SINH_VIEN": {
      state.danhSachSinhVien = [...state.danhSachSinhVien];
      state.danhSachSinhVien.splice(action.indexXoa, 1);
      return { ...state };
    }
    case "XEM_SINH_VIEN": {
      state.sinhVienChiTiet = { ...state.sinhVienChiTiet };
      state.sinhVienChiTiet = action.sinhVienXem;
      return { ...state };
    }
    case "UPDATE_SV": {
      // console.log(action.sinhVienUpdate);
      state.danhSachSinhVien = [...state.danhSachSinhVien];
      let indexUpdate = state.danhSachSinhVien.findIndex(
        (sinhVien) => sinhVien.maSV === action.sinhVienUpdate.maSV
      );

      if (indexUpdate > -1) {
        state.danhSachSinhVien[indexUpdate] = action.sinhVienUpdate;
      }
      return { ...state };
    }

    default: {
      return { ...state };
    }
  }
};
