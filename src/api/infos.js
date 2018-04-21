import request from '@/utils/request'

export function getInfos() {
  return request({
    url: '/infos',
    method: 'get'
    // headers: { 'apitoken': 'linkedinfo098' }
  })
}
