import $fn from "~/utils/fn";
import httpApi from "./httpApi";

export const getProvinceList = (): any =>
    $fn.httpPost({
        url: httpApi.com.getProvinceList
    });

    export const getCityList = (data: any): any =>
    $fn.httpPost({
        url: httpApi.com.getCityList,
        data
    });