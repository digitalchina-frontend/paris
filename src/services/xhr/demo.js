import request from '@/utils/request'

const api = {
  list: '/demo/list',
}

export default api

export function getList(parameter) {
  return request({
    url: api.list,
    method: 'get',
    params: parameter,
  })
}
