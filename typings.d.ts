declare namespace API {
  type UserInfo = {
    id: number | string,
    userName: string,
    userAvatar: string,
    userPassword: string,
    gender: number | string,
    age: number | string,
    phone: string,
    address: string,
    createTime: date,
    updateTime: date
  };

  type Result = {
    code: number,
    data: any,
    message: string
  };

  type LoginParams = {
    userName: string,
    userPassword: string,
    isClient: boolean
  };

  type RegisterParams = {
    userName: string,
    userPassword: string,
    confirmPassword: string
  };

  type ProductInfo = {
    id: number | string,
    name: string,
    image: string,
    description: string,
    price: number | string,
    stock: number | string,
    createTime: date,
    updateTime: date
  };

  type SearchParams = {
    current: number | string,
    pageSize: number | string,
    name: string | null
  };

  type CartInfo = {
    id: number | string,
    name: string,
    image: string,
    description: string,
    price: number | string,
    num: number | string,
    userId: number | string,
    createTime: date,
    updateTime: date
  }
}