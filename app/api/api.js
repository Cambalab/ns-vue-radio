import axios from 'axios/dist/axios'

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
