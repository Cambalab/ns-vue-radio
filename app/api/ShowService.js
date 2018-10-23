import api from './api'

export default {
  getCurrentProgram () {
    return api.get('/programas/progactual')
  },
  getPrograms () {
    return api.get('/programas/api')
  }
}
