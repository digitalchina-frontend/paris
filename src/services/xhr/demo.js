import request from '@/utils/request'

const api = {
  list: '/demo/list',
  create: '/demo/create',
}

export default api

export function getFoo(params) {
  return request({
    url: api.list,
    method: 'get',
    params,
  })
}

export function postBar(data) {
  return request({
    url: api.create,
    method: 'post',
    data,
  })
}
