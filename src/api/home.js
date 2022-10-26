import request from '@/untils/request'
// 新鲜好物
export const findNew = () => request.get('/home/new')
// 人气推荐
export const findHot = () => request.get('/home/hot')