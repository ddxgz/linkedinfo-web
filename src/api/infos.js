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
