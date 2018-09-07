import api from './api'

export default {
  getPodcasts () {
    return api().get('/podcasts/api');
  }
}
