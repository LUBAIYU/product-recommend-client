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
export const recommendProductsAPI = () => {
  return request({
    method: 'GET',
    url: '/product/recommend'
  }) as Promise<API.Result>
}