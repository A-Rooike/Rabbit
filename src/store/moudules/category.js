import { findAllCategory, findTopCategory, findTwoCategory, findGoodsDetail } from '@/api/category'
import { topCategory } from '@/untils/constants'
const category = {
  state: {
    CategoryList: topCategory.map((ele) => { return { 'name': ele, 'children': [{ 'name': '' }, { 'name': '' }] } }),
    OneCategoryList: {},
    TwoCategoryList: {},
    GoodsList: {}
  },
  mutations: {
    GETALLCATEGORY(state, data) {
      state.CategoryList = data
    },
    GETTOPCATEGORY(state, data) {
      state.OneCategoryList = data
    },
    GETTWOCATEGORY(state, data) {
      state.TwoCategoryList = data
    },
    GETCATEGORYGOODS(state, data) {
      console.log(111, data)
      console.log(state.GoodsList)
      // state.GoodsList = { ...state.GoodsList, ...data }
      state.GoodsList = data
      console.log(state.GoodsList)

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
    },
    //获取一级分类的内容
    async GetTopCategory({ commit }, data) {
      let res = await findTopCategory(data)
      // console.log(res)
      if (res.msg == '操作成功') {
        commit('GETTOPCATEGORY', res.result)
      }
    },
    // 获取二级分类内容
    async GetTwoCategory({ commit }, data) {
      let res = await findTwoCategory(data)
      if (res.msg == '操作成功') {
        commit('GETTWOCATEGORY', res.result)
      }
    },
    //获取mock商品
    async GetCategoryGoods({ commit }, data) {
      let res = await findGoodsDetail(data)
      if (res.msg == '操作成功') {
        console.log(res.result)
        commit('GETCATEGORYGOODS', res.result)
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