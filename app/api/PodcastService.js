import api from './api'
import config from '../config'

const {
  endpointUrls: {
    podcasts
  }
} = config

export default {
  getPodcasts (qty) {
    let options = ''
    if (qty > 0) {
      options += '?limit=' + qty
    }
    return api.get(podcasts + options)
  }
}
