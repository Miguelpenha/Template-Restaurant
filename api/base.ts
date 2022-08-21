import axios from 'axios'

const base = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'Authorization': `key ${process.env.API_KEY}`
    }
})

export default base