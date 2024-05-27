<script setup lang="ts">
const axios = useNuxtApp().$axios

// TODO: Define type
const data = ref()

const selected = ref([])

watch(selected, ()=>{
  console.log('watch', selected.value)
})

const headers = [
  { title: 'ID', value: 'id', align: 'center', nowrap: true },
  { title: 'Full Name', value: 'full_name', align: 'center', nowrap: true },
  { title: 'E-Mail', value: 'email', align: 'center', nowrap: true },
  { title: 'Username', value: 'username', align: 'center', nowrap: true },
  { title: 'Role', value: 'role', align: 'center', nowrap: true },
  { title: 'Action', value: 'action', align: 'center', nowrap: true },
]

onBeforeMount(async () => {
  await axios.get('/api/users').then((response) => {
    data.value = response.data
  }).catch((error) => {
    console.log('error', error)
  })
})

const removeUser = (item: any) => {
  axios.delete(`/api/users/${item?.id}`).then(res => {
    console.log('res', res)
  }).catch(err => {
    console.log('err', err)
  })
}

</script>

<template>
  <VContainer>
    <VCardTitle class="text-center font-weight-bold mt-16">
      List of Users
    </VCardTitle>
    <VCard
      max-width="900"
      class="mt-8 mx-auto"
    >
      <v-data-table
        v-model="selected"
        :filter-keys="'id'"
        :items="data"
        :headers="headers"
        item-value="id"
        show-select
        select-strategy="page"
        density="compact"
      >
        <template #[`item.action`]="{ item }">
          <VDialog
            width="400"
            height="500"
          >
            <template #activator="{ props: activatorProps }">
              <VTooltip location="top">
                <template #activator="{ props }">
                  <VBtn
                    @click="removeUser(item)"
                    v-bind="activatorProps"
                    icon
                    flat
                    size="40"
                    :ripple="false"
                  >
                    <VIcon
                      v-bind="props"
                      color="error"
                    >
                      mdi-minus-circle
                    </VIcon>
                  </VBtn>
                </template>
                <span>Delete User</span>
              </VTooltip>
            </template>
            <template #default="{ isActive }">
              <v-card title="Are you sure?">
                <v-card-text>
                  If you click yes user will be deleted permanently
                </v-card-text>
                <v-card-actions>
                  <VBtn
                    @click="isActive.value = false"
                    text="Close"
                  />
                  <v-spacer />
                  <v-btn
                    @click="removeUser(item)"
                    text="Yes"
                    color="error"
                  />
                </v-card-actions>
              </v-card>
            </template>
          </VDialog>
        </template>
      </v-data-table>
    </VCard>
  </VContainer>
</template>
