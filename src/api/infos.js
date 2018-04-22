import request from '@/utils/request'

export function getInfos() {
  return request({
    url: '/infos',
    method: 'get'
    // headers: { 'apitoken': 'linkedinfo098' }
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
