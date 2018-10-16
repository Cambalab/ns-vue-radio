import data from './resources/data'

class LocalApi {
    constructor() {
        this.data = data
    }

    get(id) {
        let res = [];
        console.log(id)
        switch (true) {
            case id.includes('/programas/api'):
                res = {
                    status : 200,
                    data : this.data.programas
                }
                break;
            case id.includes('/programas/progactual'):
                    res = {
                    status : 200,
                    data : this.data.progactual
                }
                break;
            /*
            case id.includes('/podcasts/api'):
                data = {
                    status : 200,
                    data : this.data.podcasts
                }
                break;
            */
            default:
                res = {
                    status : 200,
                    data : {}
                }
                break;
        }
        return Promise.resolve(res)
    }

}

export default LocalApi
