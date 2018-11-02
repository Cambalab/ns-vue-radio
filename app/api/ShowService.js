import api from './api'

export default {
  getCurrentShow () {
    return api.get('/shows/currentshow')
  },
  getShows () {
    return api.get('/shows/api')
  }
}
