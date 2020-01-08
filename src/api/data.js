import axios from 'axios'
export const api = (url = '', config = { method: 'get' }) => {
  return axios({
    // post 时候 用 data
    // method: config.method,
    url: "http://localhost:3000/" + url,
    ...config,
  }).then(res => {
    if (res.status === 200) {
      return { data: res.data }
    } else {
      return { data: {}, status: '服务器异常' }
    }
  })
}