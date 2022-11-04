import { request } from '@/untils/request'
// 新鲜好物
export const findNew = () => request.get('/home/new')
// 人气推荐
export const findHot = () => request.get('/home/hot')
// 热门品牌/home/brand
export const findBrand = () => request.get('/home/brand')
// goods
export const findGoods = () => request.get('/home/goods')
// 最新专题 /home/special
export const findSpecial = () => request.get('/home/special')
