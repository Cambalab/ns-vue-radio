import data from './resources/data'

class LocalApi {
  constructor () {
    this.data = data
  }

  get (id) {
    let res = []
    switch (true) {
    case id.includes('/api/programs', 0):
      res = {
        status: 200,
        data: this.data.shows
      }
      break
    case id.includes('/api/programs/current', 0):
      res = {
        status: 200,
        data: this.data.currentshow
      }
      break
    case id.includes('/api/podcasts', 0):
      res = {
        status: 200,
        data: {
          'results': this.data.podcasts
        }
      }
      break
    default:
      res = {
        status: 200,
        data: {}
      }
      break
    }
    return Promise.resolve(res)
  }
}

export default LocalApi
