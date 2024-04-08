import axios from 'axios'
import { getToken, getTenantId } from '@/utils/auth'

export function upload(api, file) {
  var data = new FormData()
  data.append('file', file)
  const config = {
    headers: { 'Authorization': getToken(), 'tenantId': getTenantId() }
  }
  return axios.post(api, data, config)
}
