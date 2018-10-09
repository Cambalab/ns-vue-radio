import axios from 'axios/dist/axios'

console.log(JSON_DATA)
console.log(typeof JSON_DATA)

export default() => {
    return axios.create({
        baseURL: API_URL,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
