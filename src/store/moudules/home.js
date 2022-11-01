import { findNew, findHot, findBrand, findGoods, findSpecial } from '@/api/home'
const home = {
  state: {
    NewList: [],
    HotList: [],
    BrandList: [],
    GoodsList: [],
    SpecialList: []
  },
  mutations: {
    GETNEWS(state, data) {
      state.NewList.length = 0
      state.NewList.push(...data)
    },
    GETHOT(state, data) {
      state.HotList.length = 0

      state.HotList.push(...data)
    },
    GETBRAND(state, data) {
      state.BrandList = data

      // state.BrandList.push(...data)
    },

    GETGOODS(state, data) {
      state.GoodsList = data

      // state.GoodsList.push(...data)
    },
    GETSPECIAL(state, data) {
      state.SpecialList = data
      // state.SpecialList.push(...data)
    },
  },
  actions: {
    // 获取新鲜好物
    async Getnews({ commit }) {
      let res = await findNew()
      if (res.msg == '操作成功') {
        commit('GETNEWS', res.result)
      }
    },
    // 获取人气推荐
    async GetHot({ commit }) {
      let res = await findHot()
      if (res.msg == '操作成功') {
        commit('GETHOT', res.result)
      }
    },
    // 获取热门品牌
    async GetBrand({ commit }) {
      let res = await findBrand()
      if (res.msg == '操作成功') {

        commit('GETBRAND', res.result)
      }
    },
    // 获取商品
    async GetGoods({ commit }) {
      let res = await findGoods()
      if (res.msg == '操作成功') {

        commit('GETGOODS', res.result)
      }
    },
    // 获取专题
    async GetSpecial({ commit }) {
      let res = await findSpecial()
      if (res.msg == '操作成功') {
        console.log(res)
        commit('GETSPECIAL', res.result)
      }
    },
  },
  getters: {

  }
}
export default home