import api from './api'
import config from '../config'

const {
  endpointUrls: {
    currentShow,
    shows
  }
} = config

export default {
  getCurrentShow () {
    return api.get(currentShow)
  },
  getShows () {
    return api.get(shows)
  }
}
