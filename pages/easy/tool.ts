import $fn from "~/utils/fn";
import {
    getConf,
    getSign
} from "./dat"
// 获得page的配置文件
export const getJson = (path: string): any => $fn.httpGet({
    url: path,
    data: {
        time: new Date().getTime()
    }
})
// 获得标识配置文字
export const getSignText = (value: string | number, signKey: string) => {
    let s = getSign()[signKey].find((sitem: any) => sitem.id === value)
    if (s) {
        return s.text
    }
    return "- -"
}

export const request = {
    getList: async (data: any) => $fn.httpPost({
        url: getConf().table.operate.getList.api,
        data
    }),
    add: async (data: any) => $fn.httpPost({
        url: getConf().table.operate.add.api,
        data
    }),
    edit: async (data: any) => $fn.httpPost({
        url: getConf().table.operate.edit.api,
        data
    }),
    delete: async (data: any) => $fn.httpPost({
        url: getConf().table.operate.delete.api,
        data
    }),
    // add: async (data?: any) => {
    //     let url = getConf().table.operate.add.api
    //     return {
    //         code:200,
    //         msg:'',
    //         data:{}
    //     }
    // },
    // edit: async (data?: any) => {
    //     let url = getConf().table.operate.edit.api
    //     return {
    //         code:200,
    //         msg:'',
    //         data:{}
    //     }
    // },
    // delete: async (data?: any) => {
    //     let url = getConf().table.operate.delete.api
    //     return {
    //         code:200,
    //         msg:'',
    //         data:{}
    //     }
    // },
    // 获取表格列表
    // getList: async (data: any) => {
    //     let url = getConf().table.operate.getList.api
    //     return {
    //         code:200,
    //         msg:"",
    //         data:{
    //             total:100,
    //             records:[
    //                 {
    //                     networkId: 1,
    //                     sn: "asdfadf",
    //                     remark: "组网测试",
    //                     createTime: "2020-03-18 14:19:29",
    //                     updateTime: "2020-03-21 10:34:50",
    //                     netList: [
    //                         {
    //                             ip: "000.000.000.000"
    //                         },
    //                         {
    //                             ip: "000.000.000.000"
    //                         }
    //                     ],
    //                     state: 0
    //                 },
    //                 {
    //                     networkId: 14,
    //                     sn: "asdfasdfasdf",
    //                     remark: "",
    //                     createTime: "2020-03-27 14:44:13",
    //                     updateTime: "2020-03-27 14:44:13",
    //                     netList: [
    //                         {
    //                             ip: "000.000.000.000"
    //                         },
    //                         {
    //                             ip: "000.000.000.000"
    //                         },
    //                         {
    //                             ip: "000.000.000.000"
    //                         }
    //                     ],
    //                     state: 1
    //                 }
    //             ]
    //         }
    //     }
    // },
    
}