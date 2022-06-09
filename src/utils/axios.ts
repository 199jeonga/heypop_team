import axios from 'axios'

const DOMAIN = 'http://15.164.164.238:8080/'
axios.defaults.withCredentials = true

export const request = (method: string, url: string, data: string): any => {
    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err))
}
