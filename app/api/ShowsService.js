import api from './api'

export default {
  getShows () {
    return api.get('/programas/api')
  }
}
