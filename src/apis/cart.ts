import request from '@/util/request'

//添加购物车
export const addCartAPI = (productId: number | string) => {
  return request({
    method: 'GET',
    url: '/cart/add',
    params: {
      productId: productId
    }
  }) as Promise<API.Result>
}

//删除购物车
export const delCartAPI = (cartId: number | string) => {
  return request({
    method: 'DELETE',
    url: `/cart/delete/${cartId}`
  }) as Promise<API.Result>
}

//分页查询购物车列表
export const listCartsAPI = (data: any) => {
  return request({
    method: 'GET',
    url: '/cart/page',
    params: data
  }) as Promise<API.Result>
}