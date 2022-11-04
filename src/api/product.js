import { request, mock } from '@/untils/request'
// 商品详情
export const findGoods = (params) => request.get(`/goods?id=${params}`)
// 热销推荐
export const fingHots = (params) => request.get(`/goods/hot?id=${params.id}&limit=${params.limit}&type=${params.type}`)
// 同类推荐
export const fingRelevant = (params) => request.get(`/goods/relevant?id=${params.id}&limit=${params.limit}`)
// 获取评论
export const fingEvaluate = (params) => mock.get(`/goods/${params}/evaluate`)
//评价分页数据
export const findComments = (params) => mock.get(`/goods/${params.id}/evaluate/page?page=${params.page}&pageSize=${params.pageSize}`)
