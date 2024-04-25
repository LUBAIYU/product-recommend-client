import request from '@/util/request'

//上传用户头像
export const uploadAvatarAPI = (data: any) => {
  return request({
    method: 'POST',
    url: '/user/upload/avatar',
    data
  }) as Promise<API.Result>
}

//修改个人信息
export const updateUserInfoAPI = (data: API.UserInfo) => {
  return request({
    method: 'PUT',
    url: '/user/update/info',
    data
  }) as Promise<API.Result>
}

// 用户登录
export const LoginAPI = (data: API.LoginParams) => {
  return request({
    method: 'POST',
    url: '/user/login',
    data
  }) as Promise<API.Result>
}

// 用户注册
export const RegisterAPI = (data: API.RegisterParams) => {
  return request({
    method: 'POST',
    url: '/user/register',
    data
  }) as Promise<API.Result>
}

//获取当前登录用户
export const getLoginUserAPI = () => {
  return request({
    method: 'GET',
    url: '/user/get/loginUser'
  }) as Promise<API.Result>
}
