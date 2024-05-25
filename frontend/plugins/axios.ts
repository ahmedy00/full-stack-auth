import axios from 'axios'

export default defineNuxtPlugin(() => {
    const defaultUrl = 'http://localhost:8080'

    const api = axios.create({
        baseURL: defaultUrl,
    })

    api.interceptors.request.use(config => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, error => {
        return Promise.reject(error)
    })

    api.interceptors.response.use(response => {
        return response
    }, error => {
        if (error.response.status === 401) {
            // Token expired or invalid
            localStorage.removeItem('token')
            navigateTo('/auth/login')
        }
        return Promise.reject(error)
    })

    return {
        provide: {
            axios: api,
            api: api
        }
    }
})
