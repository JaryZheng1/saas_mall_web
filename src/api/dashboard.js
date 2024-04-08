
import request from '@/utils/request'

/**
 * 商品统计数据
 * @param params
 */
export function productDataApi(params) {
  return request({
    url: 'mall/dashboard/getProductDayData',
    method: 'GET',
    params
  })
}

/**
 * 商品排行数据
 * @param params
 */
export function productRankApi(params) {
  return request({
    url: 'mall/dashboard/ranking',
    method: 'get',
    params
  })
}

/**
 * 商品趋势数据
 * @param params
 */
export function productTrendApi(params) {
  return request({
    url: 'mall/dashboard/trend',
    method: 'get',
    params
  })
}

/**
 * 交易统计数据
 */
export function tradeDataApi() {
  return request({
    url: 'mall/dashboard/getTradeDataByDate',
    method: 'get'
  })
}

/**
 * 交易概览
 * @param params
 */
export function tradeOverviewApi(params) {
  return request({
    url: 'mall/dashboard/overview',
    method: 'get',
    params
  })
}

/**
 * 交易趋势
 * @param params
 */
export function tradeTrendApi(params) {
  return request({
    url: 'mall/dashboard/trend',
    method: 'get',
    params
  })
}

/**
 * 用户总数据
 */
export function userTotalData() {
  return request({
    url: 'mall/dashboard/getUserTotal',
    method: 'get'
  })
}

/**
 * 用户区域数据
 */
export function userAreaData() {
  return request({
    url: 'mall/dashboard/area',
    method: 'get'
  })
}

/**
 * 用户渠道数据
 */
export function userChannelData() {
  return request({
    url: 'mall/dashboard/channel',
    method: 'get'
  })
}

/**
 * 用户概览
 * @param params
 */
export function userOverviewData(params) {
  return request({
    url: 'mall/dashboard/overview',
    method: 'get',
    params
  })
}

/**
 * 用户性别数据
 */
export function userSexData() {
  return request({
    url: 'mall/dashboard/sex',
    method: 'get'
  })
}

/**
 * 用户概览列表
 * @param params
 */
export function userOverviewListApi(params) {
  return request({
    url: 'mall/dashboard/overview/list',
    method: 'get',
    params
  })
}
