import data from './resources/data'

class jsonreader {
    constructor() {
        this.data = data
    }

    get(id) {
        let res = [];
        switch (true) {
            case id.includes('api'):
                res = {
                        status : 200,
                        data : this.data.programas
                }
                break;
            case id.includes('progactual'):
                    res = {
                    status : 200,
                    data : this.data.progactual
                }
                break;
                
            case id.includes('podcasts'):
                data = {
                    status : 200,
                    data : this.data.podcasts
                }
                break;
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

export default jsonreader
