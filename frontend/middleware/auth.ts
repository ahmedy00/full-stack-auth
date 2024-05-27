export default defineNuxtRouteMiddleware(to => {
    const { setSnackbar } = useSnackbarStore()
    if (process.client) {
        const token = localStorage.getItem('token')
        if (!token && (to.path !== '/auth/login' && to.path !== '/auth/signup')) {
            setSnackbar(true, '', 'You need to login first!')
            return navigateTo('/auth/login')
        } else if (token && (to.path === '/auth/login' || to.path === '/auth/signup')) {
            setSnackbar(true, '', 'You already logged in!')
            return navigateTo('/')
        }
    }
})
