export const useSnackbarStore = defineStore('snackbar', () => {
    const snackbar = reactive({
        model: false,
        state: '',
        message: ''
    })
    const setSnackbar = (model: boolean, state = '', message = '') => {
        snackbar.model = model
        snackbar.state = state
        snackbar.message = message
    }

    return {
        snackbar,
        setSnackbar,
    }
})