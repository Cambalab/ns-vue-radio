import axios from 'axios/dist/axios'

console.log(JSON_DATA)
console.log(typeof JSON_DATA)

let api = null

if (JSON_DATA) {
    api = new class n {
        get() {
            return Promise.resolve({})
        }
    }
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
