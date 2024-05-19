<script setup lang="ts">
import nuxtLogo from '~/assets/nuxt-seeklogo.svg'

const route = useRoute()
const path = computed(() => route.fullPath)

</script>

<template>
  <VCard
    max-width="400"
    class="mx-auto mt-16 py-4 px-8"
  >
    <VCardItem>
      <VImg
        :src="nuxtLogo"
        :width="100"
        class="mx-auto mb-4"
      />
    </VCardItem>
    <VCardTitle class="text-center font-weight-bold">
      Welcome to full-stack-auth
    </VCardTitle>
    <VCardSubtitle class="text-center mb-4">
      {{ path?.includes('login') ? 'Enter the credentials for login' : 'Fill out the form for registration' }}
    </VCardSubtitle>
    <slot />
    <VCardSubtitle class="text-center my-4">
      {{ path?.includes('login') ? `Don't have an account?` : 'Already have an account?' }}
      <RouterLink :to="path?.includes('login') ? '/auth/signup' : '/auth/login'">
        {{ path?.includes('login') ? 'Sign Up' : 'Login' }}
      </RouterLink>
    </VCardSubtitle>
  </VCard>
</template>
