export const pagerTemplate = (tableConf?: any) => {
    return `
    <div style="text-align:right;margin-top:10px;"
        v-if="tableConf.widget && tableConf.widget.pager">
        <pager ref="pager" @pageChange="pageChange"/>
    </div>
`
}

export const pagerMethods = {
    pageChange() {
        let that: any = this;
        that.updateTable();
    }
}