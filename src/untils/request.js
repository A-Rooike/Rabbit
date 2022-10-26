import axios from 'axios';
const server = axios.create({
  baseURL: 'https://apipc-xiaotuxian-front.itheima.net',
  timeout: 5000
})
server.interceptors.request.use((config) => {
  return config
})

server.interceptors.response.use(res => {
  return res.data
},
  err => Promise.reject(err)
)
export default server