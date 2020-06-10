// 扩展流程式校验
import { vdt, vdtX, vdtInitDefault} from 'jj-vdt'

vdtInitDefault({
    usernameRule: (val: string) => {
        if(val.length<5 || val.length>50){
            return false
        }else{
            return true
        }
    },
    passwordRule: (val: string) => {
        if(val.length<6 || val.length>50){
            return false
        }else{
            return true
        }
    },
    phoneRule: (val: string) => {
        if(val.length!=11){
            return false
        }else{
            return true
        }
    },
    imgCodeRule: (val: string) => {
        if(val.length === 5 ){
            return true
        }else{
            return false
        }
    }
});

export const Vdt = vdt({
    // key指代校验模式，通过Vdt.test(val)采用相应模式校验
    username:[{
        msg: "请输入用户名",
        default: "empty"
    },{
        msg: "用户名应该为5-50位",
        default: "usernameRule"
    }],
    password:[{
        msg: "请输入密码",
        default: "empty"
    },{
        msg: "用户名应该为6-50位",
        default: "passwordRule"
    }],
    displayName:[{
        msg: "请输入姓名",
        default: "empty"
    }],
    tel:[{
        msg: "请输入固用电话",
        default: "empty"
    }],
    phone:[{
        msg: "请输入手机号",
        default: "empty"
    }],
    email:[{
        msg: "请输入邮箱",
        default: "empty"
    }],
    address:[{
        msg: "请输入地址",
        default: "empty"
    }],
    imgCode:[{
        msg: "请输入图形验证码",
        default: "empty"
    },{
        msg: "图形验证码应该为5位",
        default: "imgCodeRule"
    }]
})

vdtX.init(Vdt);

export const VdtX = vdtX

export default vdtX