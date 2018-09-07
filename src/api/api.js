import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: process.env.API_BASE,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
