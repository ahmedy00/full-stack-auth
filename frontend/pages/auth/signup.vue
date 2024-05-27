<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  middleware: 'auth'
})

const { setSnackbar } = useSnackbarStore()
const axios = useNuxtApp().$axios

const loading = ref(false)

const credentials = reactive({
  username: '',
  fullName: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

const fields = [
  { modelValue: 'fullName', label: 'Full Name', type: 'input', rules: [(v: string) => !!v || 'Full Name is required'] },
  { modelValue: 'username', label: 'Username', type: 'input', rules: [(v: string) => !!v || 'Username is required'] },
  { modelValue: 'email', label: 'E-mail', type: 'email', rules: [(v: string) => !!v || 'E-mail is required'] },
  { modelValue: 'password', label: 'Password', type: 'password', rules: [(v: string) => !!v || 'Password is required'] },
  { modelValue: 'passwordConfirm', label: 'Password Confirm', type: 'password', rules: [(v: string) => !!v || 'Password confirm is required'] },
]

const saveUser = async () => {
  const data = {
    username: credentials.username,
    fullName: credentials.fullName,
    email: credentials.email,
    password: credentials.password
  }

  loading.value = true
  await axios.post('/api/users', data).then(() => {
    setSnackbar(true, 'success', 'Successfully signed up')
    navigateTo('/auth/login')
  }).catch((error) => {
    setSnackbar(true, 'error', 'An error occurred')
    console.log('error', error)
  })
  loading.value = false
}

</script>
<template>
  <VForm @keyup.enter="saveUser">
    <VContainer>
      <VRow>
        <VCol
          v-for="(field, index) in fields"
          :key="`field-${index}`"
          cols="12"
          class="px-2 py-0"
        >
          <VTextField
            v-model="credentials[field.modelValue]"
            :label="field.label"
            :type="field.type"
            :rules="field.rules"
            density="compact"
            variant="outlined"
            bg-color="transparent"
            color="primary"
          />
        </VCol>
      </VRow>
      <VRow>
        <VCol class="pa-2 mt-4">
          <VBtn
            @click="saveUser"
            color="primary"
            block
            :loading="loading"
          >
            Submit
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </VForm>
</template>

<style scoped>
:deep(.v-input__details) {
  display: unset !important;
  padding-top: 0 !important;
}

:deep(.v-messages) {
  padding-top: 4px;
}
</style>