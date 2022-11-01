import request from '@/untils/request'
// 三级分类顶部
export const findAllCategory = () => request.get('/home/category/head')
// 一级类目
export const findTopCategory = (params) => request.get(`/category?id=${params}`)
//二级类目
export const findTwoCategory = (params) => request.get(`/category/sub/filter?id=${params}`)
// 商品详情
export const findGoodsDetail = (params) => request.post(`/category/goods/temporary`, params)


