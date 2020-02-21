import axios from 'axios'
import store from '@/store/index'

export default () => {
  return axios.create({
    baseURL: 'http://94.23.47.22:3001/',
    // baseURL: 'http://localhost:3001/',
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
