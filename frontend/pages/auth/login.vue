<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'auth'
})

onBeforeMount(() => {
  setPageLayout('auth')
})

const axios = useNuxtApp().$axios
const { setSnackbar } = useSnackbarStore()

const credentials = reactive({
  username: '',
  password: ''
})

const fields = ref([
  { modelValue: 'username', label: 'Username', type: 'input', icon: '' },
  { modelValue: 'password', label: 'Password', type: 'password', icon: 'mdi-eye-outline' },
])

const login = async () => {
  await axios.post('/api/login', {
    username: credentials.username,
    password: credentials.password
  }).then((response) => {
    setSnackbar(true, 'success', 'Successful')
    const token = response.data
    localStorage.setItem('token', token)
    navigateTo('/')
  }).catch((error) => {
    setSnackbar(true, 'error', 'Username or password is not match')
    console.log('error', error)
  })
}

</script>

<template>
  <VForm>
    <VContainer>
      <VRow>
        <VCol
          v-for="(field, index) in fields"
          :key="`field-${index}`"
          cols="12"
          class="pa-2"
        >
          <VTextField
            v-model="credentials[field.modelValue]"
            @click:append-inner="fields[index].type = fields[index].type === 'password' ? 'input' : 'password'"
            :label="field.label"
            :type="field.type"
            :append-inner-icon="field.icon"
            density="compact"
            variant="outlined"
            bg-color="transparent"
            color="primary"
            hide-details
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol class="pa-2 mt-4">
          <VBtn
            @click="login"
            color="primary"
            block
          >
            Submit
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VForm>
</template>