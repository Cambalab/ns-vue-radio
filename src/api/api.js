import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: 'http://www.ahijuna.fm',
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
