import request from '@/utils/request'

// 读取画布
export function getCanvasData(params) {
  // console.log(qs.stringify(params, { indices: false }))
  return request({
    url: 'mall/canvas/getCanvas',
    method: 'get',
    params
  })
}

// 保存画布
export function saveCanvasData(data) {
  return request({
    url: 'mall/canvas/saveCanvas',
    method: 'post',
    data
  })
}

// 文件上传
export function uploadCanvas() {
  return request({
    url: 'system/canvas/upload',
    method: ''
  })
}

// 查询分类层级
export function getClassify() {
  return request({
    url: 'mall/canvas/getClassify',
    method: 'get'
  })
}

// 选择商品查询
export function getProducts(params) {
  return request({
    url: 'mall/canvas/getProducts',
    methods: 'get',
    params
  })
}

// 选择店铺查询
export function getShops(params) {
  return request({
    url: 'mall/canvas/getShops',
    method: 'get',
    params
  })
}
