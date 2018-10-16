import api from './api'

export default {
  getProgramas () {
    return api.get('/programas/api');
  }
}
