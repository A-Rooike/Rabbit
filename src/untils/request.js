import axios from 'axios';
const server = axios.create({
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net',
  timeout: 5000
})
server.interceptors.request.use((config) => {
  //判断是否登录
  let userInfo = JSON.parse(localStorage.getItem('userInfo')) || {}
  if (userInfo.token) {
    config.headers.Authorization = `Bearer ${userInfo.token}`
  }
  return config
})

server.interceptors.response.use(res => {
  return res.data
},
  err => Promise.reject(err)
)
export default server