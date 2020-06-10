<template>
    <div ref="page">
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import $fn from "~/utils/fn";
import { pageData, pageComputed, pageMethods, pageTemplate } from "./main";
import { getJson, getSignText, request } from "./tool";
import {
    setConf,
    setSign
} from "./dat"
@Component
export default class extends Vue {
    public page: any;
    public pageConf: any = {};
    public sign: any = {}
    public beforeRouteEnter(to: any, from: any, next: any) {
        next((vm: any) => {
            vm.buildViewByJson();
        });
    }
    public buildViewByJson() {
        getJson("/pm/page/1.json").then((res: any) => {
            setConf(res)
            this.pageConf = res
            if (this.pageConf.table) {
                if (this.pageConf.signLib && this.pageConf.signLib.length > 0) {
                    // 获取sign配置
                    getJson(this.pageConf.signLib[0]).then((sign: any) => {
                        setSign(sign)
                        this.sign = sign;
                        this.buildTableComponent();
                    });
                } else {
                    this.buildTableComponent();
                }
            }
        });
    }
    public buildTableComponent() {
        // 更新表格列配置
        let columns = this.pageConf.table.columns;
        columns.forEach((column: any, idx: number) => {
            column._id = idx;
            column.dataIndex = column.key;
            column.ellipsis = true;
            column.scopedSlots = { customRender: column.key };
        });
        columns.push({
            title: "操作",
            key: "operation",
            width: 240,
            scopedSlots: { customRender: "operation" }
        });
        pageData.columns = columns;
        const PageComponent = Vue.extend({
            data: () => ({
                ...pageData,
                tableConf: this.pageConf.table,
                sign: this.sign
            }),
            computed: {
                ...pageComputed
            },
            mounted() {
                this.updateTable();
            },
            methods: {
                ...pageMethods
            },
            template: pageTemplate(this.pageConf.table)
        });
        let pageComponent: any = new PageComponent().$mount();
        const $page: any = this.$refs.page;
        $page.appendChild(pageComponent.$el);
    }
}
</script>