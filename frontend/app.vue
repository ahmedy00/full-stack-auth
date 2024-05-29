<script setup lang="ts">

const { setSnackbar } = useSnackbarStore()
const { snackbar } = storeToRefs(useSnackbarStore())

const { setCurrentUser } = useCurrentUser()

const axios = useNuxtApp().$axios

onMounted(async () => {
  await axios.get('/api/users/currentUser').then(res => {
    setCurrentUser(res.data)
  }).catch(err => {
    console.log('err', err)
  })
})

</script>

<template>
  <VApp>
    <VMain>
      <VSnackbar
        v-model="snackbar.model"
        :color="snackbar.state"
      >
        {{ snackbar.message }}
        <template #actions>
          <VBtn
            @click="setSnackbar(false)"
            variant="text"
            icon
            size="small"
            class="font-weight-bold"
          >
            X
          </VBtn>
        </template>
      </VSnackbar>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </VMain>
  </VApp>
</template>
