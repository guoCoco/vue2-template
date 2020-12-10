import axios from 'axios'
import httpConf from '../config/httpConf'

let baseURL
if (process.env.NODE_ENV === 'production') {
  if (process.env.VUE_APP_MODE === 'uat') {
    baseURL = 'https://api.example.com'
  } else if (process.env.VUE_APP_MODE === 'sit') {
    baseURL = 'https://api.example.com'
  } else {
    baseURL = 'https://api.example.com'
  }
} else {
  baseURL = '/api'
}

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 20000
axios.defaults.withCredentials = true // 跨域请求携带cookie

// 添加请求拦截器
axios.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  return config
}, (error) => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use((res) => {
  // 对响应数据做点什么
  if (res.status !== 200) {
    alert('请求失败')
  }
  /** todos
   * 1. 如果toke过期 跳转到登录页面
   * */
  return res
}, (error) => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default (reqName, params) => {
  const reqMap = httpConf[reqName]
  if (typeof reqMap !== 'object') {
    alert('请输入正确的url')
  }
  const url = reqMap.url
  const method = reqMap.method
  // get 请求参数 params   post 请求为data
  const methodArr = ['post', 'POST', 'PUT', 'put', 'PATCH']
  const paramKey = methodArr.includes(url) ? 'data' : 'params'
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      [paramKey]: params
    }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(res)
      }
    }).catch(err => {
      reject(err)
    })
  })
}
