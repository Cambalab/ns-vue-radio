import api from './api'

export default {
  getCurrentShow () {
    return api.get('/programas/progactual')
  }
}