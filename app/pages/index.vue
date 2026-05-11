<script lang="ts" setup>
import {useApi, ProfileApi, showApiError} from '~/shared';

const apiProfile = useApi(ProfileApi)

async function getProfile() {
  try {
    const { data } = await apiProfile.profileControllerGetProfile()

    console.log('DATA: ', data)
  } catch (e) {
    showApiError(e)
  }
}

onMounted(getProfile)
</script>

<template>
  <section>
    <h1>Главная страница</h1>
    <p>Layout: default</p>
  </section>
</template>
