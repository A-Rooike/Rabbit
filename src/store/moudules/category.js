import { findAllCategory } from '@/api/category'
import { topCategory } from '@/untils/constants'
const category = {
  state: {
    CategoryList: topCategory.map((ele) => { return { 'name': ele, 'children': [{ 'name': '' }, { 'name': '' }] } })
  },
  mutations: {
    GETALLCATEGORY(state, data) {
      state.CategoryList = data
      
    }
  },
  actions: {
    // 获取三级分类内容
    async GetAllCategory({ commit }, data) {
      let res = await findAllCategory(data)
      // console.log(res)
      if (res.msg == '操作成功') {
        commit('GETALLCATEGORY', res.result)
      }
    }
  },
  getters: {
    CategoryLeft(state) {
      let arr = state.CategoryList.map((ele) => {
        let temp = []
        let obj = {}
        if (ele.children[1]) {
          temp.push(ele.name)
          temp.push(ele.children[0].name)
          temp.push(ele.children[1].name)
          obj.carName = temp
          obj.goods = ele.goods
          return obj
        }
        temp.push(ele.name)
        temp.push(ele.children[0].name)
        obj.carName = temp
        obj.goods = ele.goods
        return obj
      })
      return arr
    }
  }
}
export default category