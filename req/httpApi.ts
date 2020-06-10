const api = `/api`
export default {
    com: {
        getProvinceList: `${api}/area/getProvinceList`,
        getCityList: `${api}/area/getCityList`
    },
    user: {
        loginImgCode: `${api}/user/getImgCode`,
        login: `${api}/user/login`,
        logout: `${api}/user/logout`,
        register: `${api}/user/register`,
        getInfo: `${api}/user/getInfo`
    },
}