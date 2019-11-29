import api from './api'
import config from '../config'

const {
  endpointUrls: {
    podcasts
  }
} = config

export default {
  getPodcasts (qty) {
    return api.get(podcasts)
  }
}
