import api from './api'

export default {
  getProgramaActual () {
    return api().get('/programas/progactual');
  }
}
