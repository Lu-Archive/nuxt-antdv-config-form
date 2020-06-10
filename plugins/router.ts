import PageApi from "~/req/pageApi"
import {
    getInfo
} from "~/req/user"
const publicPages = [
    PageApi.login,
    PageApi.register,
    PageApi.logout
]
export default ({ app, store, redirect }: any) => {
    app.router.beforeEach(async (to: any, from: any, next: any) => {
        // if (publicPages.indexOf(to.path) === -1) {
        //     if (process.client) {
        //         getInfo().then((res: any) => {
        //             if (res.code === 200) {
        //                 store.commit("user/setUsername", res.data.username)
        //             }
        //             if (res.code === 80002) {
        //                 return redirect(PageApi.login)
        //             }
        //         })
        //     }
        // }
        next()
    })
}