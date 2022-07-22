const stateGioHang = {
  gioHang: [],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  let gioHangCapNhap = [...state.gioHang];

  switch (action.type) {
    case "ThemGioHang":
      //Các bước xử lý khi type ThemGioHang
      let productFind = gioHangCapNhap.find(
        (spGH) => spGH.maSP === action.spGHClick.maSP
      );
      if (productFind) {
        productFind.soLuong += 1;
      } else {
        gioHangCapNhap.push(action.spGHClick);
      }
      //render lại giao diện
      state.gioHang = gioHangCapNhap;
      return { ...state };

    case "XoaSanPham":
      if (action.index > -1) {
        gioHangCapNhap.splice(action.index, 1);
      }
      //render lại giao diện
      state.gioHang = gioHangCapNhap;
      return { ...state };
    case "TangGiamSoLuong":
      let productFindSL = gioHangCapNhap.find(
        (spGH) => spGH.maSP === action.maSPClick
      );
      if (action.tangGiam) {
        productFindSL.soLuong += 1;
      } else {
        if (productFindSL.soLuong > 1) {
          productFindSL.soLuong -= 1;
        }
      }
      //render lại giao diện
      state.gioHang = gioHangCapNhap;
      return { ...state };
  }
  return { ...state };
};
