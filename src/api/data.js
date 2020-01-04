import axios from 'axios'
export const api = (url = '') => {
  return axios({
    method: 'get',
    url: url,
  }).then(res => {
    if (res.status === 200) {
      return { data: res.data }
    } else {
      return { data: {}, status: '服务器异常' }
    }
  })
}