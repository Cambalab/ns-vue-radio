import data from './resources/data'

class LocalApi {
  constructor () {
    this.data = data
  }

  get (id) {
    let res = []
    console.log(id)
    switch (true) {
    case id.includes('/programas/api', 0):
      res = {
        status: 200,
        data: this.data.programas
      }
      break
    case id.includes('/programas/progactual', 0):
      res = {
        status: 200,
        data: this.data.progactual
      }
      break
    case id.includes('/podcasts/api', 0):
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
