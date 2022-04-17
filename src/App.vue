<template>
  <NavHeader />

  <div class="container max-w-6xl mx-auto mt-20 pb-20">
    <router-view />
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue';

export default {
  components: {
    NavHeader,
  },
};
</script>

<style></style>
