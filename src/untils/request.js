import axios from 'axios';
export const request = axios.create({
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net',
  timeout: 5000
})
request.interceptors.request.use((config) => {
  //判断是否登录
  let userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
  if (userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`
  }
  return config
})

request.interceptors.response.use(res => {
  return res.data
},
  err => Promise.reject(err)
)

export const mock = axios.create({
  baseURL: 'https://mock.boxuegu.com/mock/1175',
  timeout: 5000
})
mock.interceptors.request.use((config) => {
  //判断是否登录
  let userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
  if (userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`
  }
  return config
})

mock.interceptors.response.use(res => {
  return res.data
},
  err => Promise.reject(err)
)