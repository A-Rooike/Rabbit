import request from '@/untils/request'
// 三级分类顶部
export const findAllCategory = () => request.get('/home/category/head')