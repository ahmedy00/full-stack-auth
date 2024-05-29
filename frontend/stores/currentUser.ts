import type { User } from '~/types/user'

export const useCurrentUser = defineStore('current-user', () => {
   const currentUser = ref<User>()

    const setCurrentUser = (user: any) => {
       currentUser.value = user
    }

    return {
        currentUser,
        setCurrentUser
    }
})