import request from '@/utils/request'

const api = {
  allTypeTree: '/prod/all_type_tree',
}

export default api

export function geAllTypeTree(parameter) {
  return request({
    url: api.allTypeTree,
    method: 'get',
    params: parameter,
  })
}
