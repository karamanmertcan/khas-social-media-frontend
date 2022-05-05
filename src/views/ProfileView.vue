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
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
</style>
