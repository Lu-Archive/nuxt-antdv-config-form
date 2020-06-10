export const headerTemplate = (tableConf?: any) => {
    return `
    <div style="margin-bottom:10px;">
        <a-input-search size="small"
            :placeholder="tableConf.widget.search.placeholder"
            style="width:160px;"
            v-model="searchTxt"
            @search="onSearch"
            v-if="tableConf.widget && tableConf.widget.search"
            enterButton />
        <a-button size="small"
            v-if="tableConf.operate && tableConf.operate.add"
            @click="addItem">
            <a-icon type="plus" />
        </a-button>
    </div>
    `
} 

export const headerData = {
    searchTxt:""
}

export const headerMethods = {
    onSearch(){
        let that: any = this;
        that.updateTable()
    },
    addItem(){
        let that: any = this;
        that.showModal(null)
    }
}