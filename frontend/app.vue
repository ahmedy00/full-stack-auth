<script setup lang="ts">

const { setSnackbar } = useSnackbarStore()
const { snackbar } = storeToRefs(useSnackbarStore())



</script>

<template>
  <VApp>
    <VMain>
      <VSnackbar
        v-model="snackbar.model"
        location="top"
        :color="snackbar.state"
      >
        {{ snackbar.message }}
        <template #actions>
          <VBtn
            @click="setSnackbar(false)"
            variant="text"
            icon
            size="small"
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
