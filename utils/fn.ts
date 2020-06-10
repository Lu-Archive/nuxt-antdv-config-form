import { Message } from "~/utils/antd";
import $fn from "jj-browser-fn";

export const ProjFn = {
	...$fn,
	message: () => {
		return Message
	},
	toRouter: (str: string) => {
		if(process.client){
			window.$nuxt.$router.push(str)
		}
	},
	toLoginPage: () => {
		ProjFn.toRouter("/login")
	},
	// 添加全局公共方法
	checkHttpResponse: (res: any, errorFn: any, isNotice: boolean) => {
		return new Promise(resolve => {
			if (res && ProjFn.n(res.code) === 200) {
				resolve(res.data);
			} else if (res && ProjFn.n(res.code) === 80002) {
				// 登出全局code码
				Message.destroy();
				Message.error(res.msg);
				ProjFn.toLoginPage()
			} else if (res && ProjFn.n(res.code) === 400) {
				if (errorFn) {
					errorFn(res);
				} else {
					Message.destroy();
					Message.error(res.msg);
				}
			} else {
				if (errorFn) {
					errorFn(res);
				}
				if (isNotice) {
					Message.error(res.msg);
				}
			}
		});
	},
	showMsgResponse: (res: any, errorFn?: any) => {
		return ProjFn.checkHttpResponse(res, errorFn, true);
	},
	handleResponse: (res: any, errorFn: any) => {
		return ProjFn.checkHttpResponse(res, errorFn, false);
	}
};
export default ProjFn;
