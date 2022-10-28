import { Login } from '@/api/user'
const user = {
  state: {
    userInfo: {}
  },
  mutations: {
    TOLOGIN(state, data) {
      state.userInfo = { ...state.userinfo, ...data }
      // 不做加密处理 统一放缓存
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo))

    }
  },
  actions: {
    async Tologin({ commit }, data) {
      console.log(data)
      let res = await Login(data)
      if (res.msg == '操作成功') {
        commit('TOLOGIN', res.result)
      }

    }
  },
  getters: {}
}
export default user