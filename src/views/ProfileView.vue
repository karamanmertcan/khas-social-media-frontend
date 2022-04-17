<script setup>
import UserInformations from '../components/UserInformations.vue';
</script>

<template>
  <div class="h-auto max-w-screen-md mx-auto bg-blue-500 profile__header rounded-lg">
    <UserInformations />
  </div>
</template>

<style scoped>
.profile__header {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
</style>
