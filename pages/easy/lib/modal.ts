import {request} from "../tool"
import { Message } from "~/utils/antd";
import { getSign } from "../dat"
import $fn from "@/utils/fn"
export const modalTemplate = (tableConf?: any) => {
    let descriptions = ``
    if (tableConf.operate && (tableConf.operate.edit || tableConf.operate.add)) {
        tableConf.columns.forEach((column: any) => {
            if (!column.operate) {
                return
            }
            // 是否显示
            let showAttr = ``
            if (column.operate.isAddItem && column.operate.isEditItem) {
                showAttr = `modalType==0 || modalType==1`
            } else if (column.operate.isAddItem && !column.operate.isEditItem) {
                showAttr = `modalType==0`
            } else if (!column.operate.isAddItem && column.operate.isEditItem) {
                showAttr = `modalType==1`
            }
            // 输入/单选类型
            let desItem = ``
            if (column.signKey === void (0)) {
                desItem += `
                <a-input 
                    style="width:230px;"
                    size="small"
                    v-model="item.${column.key}"
                    ${column.operate.editable === false ? 'disabled' : ''} />`
            } else {
                let radios = ``
                getSign()[column.signKey].forEach((item: any) => {
                    radios+=`<a-radio :value="${item.id}">${item.text}</a-radio>`
                })
                desItem += `
                <a-radio-group
                    name="${column.key}Group"
                    size="small"
                    ${column.operate.editable === false ? 'disabled' : ''}
                    v-model="item.${column.key}"
                    >
                    ${radios}
                </a-radio-group>
                `
            }
            descriptions += `
            <a-descriptions-item label="${column.title}"
                v-if="${showAttr}">
                ${desItem}
            </a-descriptions-item>
            `
        })
    }
    return `
    <a-modal :title="modalType?'修改':'添加'"
        v-model="modalVisible"
        :maskClosable="false"
        :confirmLoading="modalConfirmLoading"
        okText="确定"
        cancelText="取消"
        :width="560"
        @ok="handleOk">
        <a-descriptions title="" 
            layout="vertical" 
            size="small"
            :column="{ xxl: 3, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }">
            ${descriptions}
        </a-descriptions>
    </a-modal>
`
}
export const modalData = {
    modalTitle: "",
    modalConfirmLoading: false,
    modalVisible: false,
    modalOkFn: null,
    // modalType 0: 添加, 1: 修改
    modalType: 0,
    item: {},
}

export const modalMethods = {
    getEmptyItem(){
        let that: any = this;
        let emptyItem: any = {}
        that.columns.forEach((column: any, idx: number) => {
            emptyItem[column.key] = null
        });
        return emptyItem
    },
    showModal(item?: any) {
        let that: any = this;
        that.modalConfirmLoading = false;
        that.item = that.getEmptyItem();
        that.modalType = 0;
        if (item) {
            that.modalType = 1;
            that.item = item;
        }
        that.modalVisible = true;
        return new Promise(resolve => {
            that.modalOkFn = () => {
                resolve();
            };
        });
    },
    async handleOk() {
        let that: any = this;
        // 本地校验
        that.modalConfirmLoading = true;
        if (that.modalType) {
            await $fn.showMsgResponse(
                await request.edit(that.item)
            )
        } else {
            await $fn.showMsgResponse(
                await request.add(that.item)
            )
        }
        Message.success("操作成功！")
        that.modalVisible = false;
        that.modalOkFn();
    }
}
