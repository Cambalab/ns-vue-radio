import axios from 'axios/dist/axios'
import config from '../config'
import apijson from '../lib/jsonreader'

let api = null
console.log(config)

if (config.jsondata) {
    /*
    api = new class n {
        get() {
            return Promise.resolve({})
        }
    }
    */
   api = new apijson()
} else {
    api = axios.create({
        baseURL: API_URL,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }) 
}

export default api
