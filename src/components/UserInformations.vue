<script setup>
import { useStore } from 'vuex';

const store = useStore();

const { user } = store.state;
</script>

<template>
  <div class="flex flex-col justify-center items-center p-5">
    <img src="https://picsum.photos/200/200" class="rounded-full border-8 object-fill h-32 w-32" alt="profile_image" />
    <span class="text-white text-xl mt-5 text-center"> @{{ user.username }} </span>
    <span class="text-white text-xl mt-5 text-center"> {{ user.firstName }} {{ user.lastName }} </span>
    <span class="text-white text-xl mt-5 text-center"> React Native Developer </span>
  </div>
  <div class="flex flex-row justify-center">
    <div class="flex flex-col justify-center items-center p-5">
      <span class="text-white text-xl"> 10 </span>
      <span class="text-white text-xl"> Posts </span>
    </div>
    <div class="flex flex-col justify-center items-center p-5">
      <span class="text-white text-xl"> {{ user.followers.length }} </span>
      <span class="text-white text-xl"> Followers </span>
    </div>
    <div class="flex flex-col justify-center items-center p-5">
      <span class="text-white text-xl"> {{ user.following.length }} </span>
      <span class="text-white text-xl"> Following </span>
    </div>
  </div>
</template>
