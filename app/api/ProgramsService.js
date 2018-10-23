import api from './api'

export default {
  getPrograms () {
    return api.get('/programas/api')
  }
}
