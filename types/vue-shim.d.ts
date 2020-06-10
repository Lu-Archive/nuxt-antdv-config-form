
declare module "*.vue" {
	import { Component, Vue } from "nuxt-property-decorator";
	export default Vue;
}

declare module "ant-design-vue" {
	const Ant: any;
	export default Ant;
}

declare module "ant-design-vue/lib/message" {
	const Message: any;
	export default Message;
}

declare module "webpack-hot-middleware" {
	const middleware: any;
	export interface Options {
		[proName: string]: any;
	}
	export default middleware;
}
