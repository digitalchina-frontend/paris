import request from '@/utils/request'

const api = {
  list: '/demo/list',
  create: '/demo/create',
}

export default api

export function getFoo(parameter) {
  return request({
    url: api.list,
    method: 'get',
    params: parameter,
  })
}

export function postBar(parameter) {
  debugger
  return request({
    url: api.create,
    method: 'post',
    params: parameter,
  })
}
