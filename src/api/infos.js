import request from '@/utils/request'

// export function getInfoList(path, offset, quantity, tags) {
export function getInfoList(path, params) {
  return request({
    url: path,
    method: 'get',
    // headers: { 'apitoken': 'linkedinfo098' }
    params: params
  })
}

export function getInfos(offset) {
  return request({
    url: '/infos',
    method: 'get',
    // headers: { 'apitoken': 'linkedinfo098' }
    params: { offset: offset }
  })
}

export function getTags() {
  return request({
    url: '/tags',
    method: 'get'
    // headers: { 'apitoken': 'linkedinfo098' }
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
export function getRecommendedInfos(infoKey) {
  return request({
    url: '/recommendedinfos/' + infoKey,
    method: 'get'
  })
}
