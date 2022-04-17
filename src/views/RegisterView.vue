<script setup>
import { useMutation } from 'vue-query';
import { useStore } from 'vuex';
import RegisterForm from '../components/forms/RegisterForm.vue';
import * as Queries from '../utils/queries';

const store = useStore();

const registerMutation = useMutation(Queries.register, {
  onSuccess: (data) => {
    console.log(data);
    store.commit('setUser', data.user);
    store.commit('setToken', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    store.commit('toggleAuth');
  },
  onError: (error) => {
    console.error(error.message);
  },
});
</script>

<template>
  <div class="container md:max-w-xl max-w-sm mx-auto h-screen mt-10">
    <div class="w-full text-center">
      <div class="font-bold text-5xl">Register</div>
    </div>
    <RegisterForm :registerMutate="registerMutation" />

    <div class="w-full text-center mt-10">
      <a href="/login" class="text-blue-700 hover:text-blue-800">You have an account ? Login</a>
    </div>
  </div>
</template>

<style></style>
