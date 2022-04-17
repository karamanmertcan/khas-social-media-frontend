<script setup>
import { useMutation } from 'vue-query';
import { useStore } from 'vuex';
import LoginForm from '../components/forms/LoginForm.vue';
import * as Queries from '../utils/queries';

const store = useStore();

const loginMutation = useMutation(Queries.login, {
  onSuccess: (data) => {
    store.commit('setUser', data.user);
    store.commit('setToken', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.accessToken));
    store.commit('toggleAuth');
  },
  onError: (error) => {
    console.log(error);
  },
});
</script>

<template>
  <div class="container md:max-w-xl max-w-sm mx-auto h-screen mt-10">
    <div class="w-full text-center">
      <div class="font-bold text-5xl">Login</div>
    </div>
    <LoginForm :loginMutate="loginMutation" />

    <div class="w-full text-center mt-10">
      <a href="/register" class="text-blue-700 hover:text-blue-800">You don't have an account ? Register</a>
    </div>
  </div>
</template>

<style></style>
