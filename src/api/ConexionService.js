import api from './api'

export default {
  getProgramaActual () {
    return api().get('/programas/progactual');
  },
  getProgramas () {
    return api().get('/programas/api');
  },
  getPodcasts () {
    return api().get('/podcasts/api?limit=0');
  }
}
