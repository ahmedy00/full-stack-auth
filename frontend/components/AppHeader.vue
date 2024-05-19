<script setup lang="ts">
const toggle = ref<number>()

const routeMaps = [
  { index: 0, value: 'users' },
  { index: 1, value: 'documents' },
]

const logout = () => {
  localStorage.removeItem('token')
  navigateTo('/auth/login')
}

</script>
<template>
  <VAppBar
    color="teal-darken-4"
  >
    <VAppBarTitle>
      <VBtnToggle
        v-model="toggle"
      >
        <VBtn
          v-for="(route, index) in routeMaps"
          @click="navigateTo(`/${route.value}`)"
          :key="`button-${index}`"
          variant="text"
          base-color="#FFFFFF"
          density="compact"
        >
          {{ route.value }}
        </VBtn>
      </VBtnToggle>
    </VAppBarTitle>
    <VSpacer />
    <VMenu>
      <template #activator="{ props }">
        <VBtn
          v-bind="props"
          icon
        >
          <VIcon>mdi-dots-vertical</VIcon>
        </VBtn>
      </template>
      <VCard>
        <VList
          nav
          class="pa-0"
        >
          <VListItem
            @click="navigateTo(`/profile`)"
            class="px-4"
          >
            <VIcon class="mb-1 mr-2">
              mdi-account
            </VIcon>
            Profile
          </VListItem>
          <VListItem
            @click="logout"
            class="px-4"
            base-color="error"
          >
            <VIcon class="mb-1 mr-2">
              mdi-logout
            </VIcon>
            Logout
          </VListItem>
        </VList>
      </VCard>
    </VMenu>
  </VAppBar>
</template>