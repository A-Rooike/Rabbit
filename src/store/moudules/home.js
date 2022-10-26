import { findNew, findHot } from '@/api/home'
const home = {
  state: {
    NewList: [],
    HotList: []
  },
  mutations: {
    GETNEWS(state, data) {
      state.NewList.push(...data)
    },
    GETHOT(state, data) {
      state.HotList.push(...data)
    }
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
        console.log(res)
        commit('GETHOT', res.result)
      }
    }
  },
  getters: {

  }
}
export default home