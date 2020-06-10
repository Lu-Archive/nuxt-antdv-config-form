<template>
    <a-modal :title="title"
        v-model="visible"
        :maskClosable="false"
        :confirmLoading="confirmLoading"
        okText="确定"
        cancelText="取消"
        :width="400"
        @ok="handleOk">
        <div class="row">
            <div>
                <a-input v-model.trim="name"
                    ref="input"
                    :placeholder="placeholder" />
            </div>
        </div>
    </a-modal>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import $fn from "~/utils/fn";
import { Message } from "~/utils/antd";
@Component
export default class extends Vue {
    public title = "";
    public confirmLoading = false;
    public visible = false;
    public okFn: any = null;

    public item: any = null;
    public name = "";
    public placeholder = "";
    public fn: any = null;

    public run(option: any) {
        this.confirmLoading = false;
        this.title = option.title;
        this.placeholder = option.placeholder;
        this.fn = option.fn;
        this.name = "";
        this.visible = true;
        return new Promise(resolve => {
            this.okFn = () => {
                resolve();
            };
        });
    }
    public cancelLoading() {
        this.confirmLoading = false;
    }
    public async handleOk() {
        this.confirmLoading = true;
        await this.fn(this.name, this.cancelLoading);
        this.visible = false;
        this.okFn();
    }
}
</script>
<style lang="less" scoped>
.row {
    margin-bottom: 12px;
    span {
        display: inline-block;
        margin-bottom: 6px;
        width: 60px;
        text-align: right;
    }
    span + div {
        display: inline-block;
        width: 380px;
    }
}
</style>
