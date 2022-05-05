<script setup>
import InputComponent from '@/components/InputComponent.vue';
import { ref } from 'vue';

const username = ref('');

</script>

<template>
  <div class="flex flex-col justify-center">
    <span class="text-2xl font-semibold">Please Fill Your User Informations</span>
    <InputComponent v-model="username" id="usernameId" type="text" for="usernameId" label="Username" />
  </div>
</template>
