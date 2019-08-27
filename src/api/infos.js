import request from '@/utils/request'
var qs = require('qs');

// export function getInfoList(path, offset, quantity, tags) {
export function getInfoList(path, params) {
  return request({
    url: path,
    method: 'get',
    // headers: { 'apitoken': 'linkedinfo098' }
    params: params,
    paramsSerializer: function(params) {
      return qs.stringify(params, {arrayFormat: 'repeat'})
    }
  })
}

export function getInfos(offset) {
  return request({
    url: '/infos',
    method: 'get',
    params: { offset: offset }
  })
}
export function getCompoundInfos(offset) {
  // console.log('coinfos offset ', offset)
  return request({
    url: '/compoundinfos',
    method: 'get',
    params: { offset: offset }
  })
}

export function getTags(order) {
  return request({
    url: '/tags',
    method: 'get',
    params: { order: order }
  })
}

export function getRandomBooks(quantity) {
  return request({
    url: '/randombooks',
    method: 'get',
    params: { quantity: quantity }
  })
}
export function getRandomTags(quantity) {
  return request({
    url: '/randomtags',
    method: 'get',
    params: { quantity: quantity }
  })
}

export function getRandomInfos(quantity) {
  return request({
    url: '/randominfos',
    method: 'get',
    params: { quantity: quantity }
  })
}

export function getInfo(infoKey) {
  return request({
    url: '/infos/' + infoKey,
    method: 'get'
  })
}
export function getRecommendedInfos(infoKey, quantity) {
  return request({
    url: '/recommendedinfos/' + infoKey,
    method: 'get',
    params: { quantity: quantity }
  })
}
