<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})



</script>

<template>
  <VCard
    max-width="400"
    height="600"
    class="mx-auto mt-16"
  >
    <VCardText class="text-center font-weight-bold">
      Welcome to Full Stack Authentication System
    </VCardText>
  </VCard>
</template>
