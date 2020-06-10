import {
    getSignText
} from "../tool"
import {
    request
} from "../tool"
import $fn from "@/utils/fn"
import { Message } from "~/utils/antd";
export const tableTemplate = (tableConf?: any) =>{
    return `
    <a-table :columns="columns"
        ref="table"
        :dataSource="dataSource"
        :pagination="false"
        :loading="tableLoading"
        rowKey="_id"
        size="small"
        bordered>
        <template slot="operation"
            slot-scope="text, record, index">
            <div class="editable-row-operations">
                <a-button type="primary"
                    v-if="tableConf.operate && tableConf.operate.edit"
                    @click="() => editItem(index)"
                    size="small"
                    ghost>修改</a-button>
                <a-popconfirm :title="'确定删除?'"
                    v-if="tableConf.operate && tableConf.operate.delete"
                    placement="topRight"
                    @confirm="() => deleteItem(index)"
                    okText="确定"
                    okType="danger"
                    cancelText="取消">
                    <a-button
                        type="danger"
                        size="small"
                        ghost
                        >删除</a-button>
                </a-popconfirm>
            </div>
        </template>
    </a-table>
`
}

export const tableData = {
    tableData: [],
    tableLoading: false,
    columns:[],
}

export const tableComputed = {
    dataSource(){
        let that: any = this;
        let data = JSON.parse(JSON.stringify(that.tableData))
        data.forEach((item: any, idx: number) => {
            item._id = idx;
            that.columns.forEach((column: any) => {
                if(column.signKey !== void(0)){
                    item[column.key] = getSignText(item[column.key],column.signKey)
                }
            })
        });
        return data
    }
}

export const tableMethods = {
    async updateTable() {
        let that: any = this;
        that.tableLoading = true;
        const $pager: any = that.$refs.pager
        if(!$pager){
            return;
        }
        let data: any = await $fn.showMsgResponse(
            await request.getList({
                page: $pager.current,
                pageSize: $pager.pageSize,
                searchTxt: that.searchTxt
            }),
            () => that.tableLoading = false
        )
        that.tableData = data.records;
        that.tableLoading = false;
        if($pager){
            $pager.total = data.total
        }
    },
    editItem(index: number) {
        let that: any = this;
        that.showModal(that.tableData[index])
    },
    async deleteItem(index: number) {
        let that: any = this;
        await $fn.showMsgResponse(
            await request.delete(that.tableData[index])
        )
        Message.success("操作成功！")
    }
}
