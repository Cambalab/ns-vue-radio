import api from './api'

export default {
  getPodcasts (qty) {
    let options = ''
    if (qty > 0) {
      options += '?limit='+qty
    }
    return api().get('/podcasts/api'+options);
  }
}
