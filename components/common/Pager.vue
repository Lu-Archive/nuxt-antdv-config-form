<template>
    <a-pagination size="small"
        :current="current"
        :pageSize="pageSize"
        :total="total"
        @showSizeChange="pageSizeChange"
        @change="pageChange"
        showSizeChanger
        showQuickJumper>
        <template slot="buildOptionText"
            slot-scope="props">
            {{props.value}}条/页
        </template>
    </a-pagination>
</template>
<script lang = "ts">
import { Vue, Component } from "nuxt-property-decorator";
@Component
export default class PagerCom extends Vue {
    public current = 1;
    public total = 0;
    public pageSize = 20;
    public get start() {
        return this.pageSize * (this.current - 1);
    }

    public pageSizeChange(current:number,pageSize: number) {
        this.pageSize = pageSize;
        this.current = 1;
        this.$emit("pageChange");
    }
    public pageChange(current: number) {
        this.current = current;
        this.$emit("pageChange");
    }
    public init() {
        this.current = 1;
        this.total = 0;
    }
}
</script>
