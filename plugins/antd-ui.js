import Vue from 'vue'
import Antd from 'ant-design-vue/lib'
import Pager from "@/components/common/Pager.vue";
import EditableCell from "@/components/common/EditableCell.vue";

Vue.component("pager",Pager)
Vue.component("editable-cell",EditableCell)

Vue.use(Antd)
