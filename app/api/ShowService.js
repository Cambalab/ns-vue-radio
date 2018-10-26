import api from './api'

export default {
  getCurrentShow () {
    return api.get('/programas/progactual')
  },
  getShows () {
    return api.get('/programas/api')
  }
}
