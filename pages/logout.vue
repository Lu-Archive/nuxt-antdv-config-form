<template>
    <div class="container">
        <h2>登出中...</h2>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import $fn from "~/utils/fn"
import {
    logout
} from "~/req/user"
import PageApi from "~/req/pageApi"
@Component
export default class extends Vue{
    public beforeRouteEnter (to: any, from: any, next: any) {
        next((vm: any) => {
            vm.logout()
        })
    }
    public async logout(){
        await $fn.showMsgResponse(
            await logout(),
            () => {
                this.$router.go(-1)
            }
        )
        this.$router.push({
            path:PageApi.login
        })
        $fn.message().success("登出成功")
    }
};
</script>
<style lang="less" scoped>
.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>