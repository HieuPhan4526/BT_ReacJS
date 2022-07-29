import { DAT_VE, HUY_VE } from "../Types/BaiTapDatVeTypes";


export const datVeAction = (clickChart) => {
    return {
        type: DAT_VE,
        clickChart: clickChart,
    };

};
export const huyVeAcTion = (soGheClick) => {
    return {
        type: HUY_VE,
        soGheClick: soGheClick,
    };

};