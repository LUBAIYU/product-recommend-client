import request from '@/util/request'

//根据名称获取商品列表
export const searchProductsAPI = (data: API.SearchParams) => {
  return request({
    method: 'GET',
    url: '/product/search',
    params: data
  }) as Promise<API.Result>
}

//商品推荐
export const recommendProductsAPI = (data: any) => {
  return request({
    method: 'GET',
    url: '/product/recommend',
    params: data
  }) as Promise<API.Result>
}

//购买商品
export const purchaseProductsAPI = (cartId: number | string) => {
  return request({
    method: 'GET',
    url: '/product/purchase',
    params: {
      cartId: cartId
    }
  }) as Promise<API.Result>
}