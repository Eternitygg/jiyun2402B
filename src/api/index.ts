import { http } from "./http";

//登录
interface LoginParams {
    loginName: string
    passwordMd5: string
}


export const loginApi = (data?: LoginParams) => {
    return http.post('/user/login', data)
}

//注册节课
interface RegisterParams {
    loginName: string
    password: string
}

export const registerApi = (data: RegisterParams) => {
    return http.post('/user/register', data)
}

//首页数据
export const getIndexDataApi = () => {
    return http.get('/index-infos')
}