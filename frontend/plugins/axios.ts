import axios from 'axios'

export default defineNuxtPlugin(() => {
    const defaultUrl = 'http://localhost:8080'

    const api = axios.create({
        baseURL: defaultUrl,
    })

    return {
        provide: {
            axios: api,
            api: api
        }
    }
})
