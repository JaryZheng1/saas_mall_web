import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'system/yshopTenant',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'system/yshopTenant/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'system/yshopTenant',
    method: 'put',
    data
  })
}

export default { add, edit, del }
