import axios from 'axios'

var instance = axios.create({
  // `headers` 是即将被发送的自定义请求头
//   headers: {
//     plantform: 'PC'
//   },
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  // baseURL: 'http://localhost:9000'
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // console.log(config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // console.log(response)
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 登录页接口
export function list (config) {
  return new Promise((resolve, reject) => {
    instance.post('/api/list', config).then(res => {
      resolve(res.data)
    })
  })
}

