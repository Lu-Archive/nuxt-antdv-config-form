<template>
    <div class="editable-cell">
        <div v-if="editable"
            class="editable-cell-input-wrapper">
            <a-input v-model="inputText"
                style="width:calc(100% - 38px);"
                @pressEnter="check" />
            <a-icon type="check"
                class="editable-cell-icon-check"
                @click="check" />
            <a-icon type="close"
                style="margin-left:3px;"
                class="editable-cell-icon-check"
                @click="cancel" />
        </div>
        <div v-else
            class="editable-cell-text-wrapper">
            <span class="value-text"
                :title="value || ' '"
                :style="{width:spanWidth+'px'}">{{ value || ' ' }}</span>
            <a-icon type="edit"
                class="editable-cell-icon"
                @click="edit" />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, PropSync } from "nuxt-property-decorator";
@Component
export default class UrlList extends Vue {
    // @Prop() text!: String
    @PropSync('text', { type: String }) value!: string
    @PropSync('textWidth', {type: Number}) spanWidth!: number
    public cacheText = ""
    public inputText = ""

    public editable = false;

    // public handleChange(e: any) {
    //     const value = e.target.value;
    //     this.value = value;
    //     this.inputText = e.target.value;
    // }
    public check() {
        this.editable = false;
        this.$emit("change", this.inputText);
    }
    public cancel() {
        this.value = this.cacheText;
        this.inputText = this.cacheText;
        this.editable = false;
    }
    public edit() {
        this.inputText = this.value
        this.cacheText = this.value;
        this.editable = true;
    }
}
</script>
<style lang="less" scoped>
.value-text{
    display:inline-block;width:calc(100% - 38px);
    white-space:nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>