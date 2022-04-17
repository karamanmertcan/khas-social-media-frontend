<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
  registerMutate: Object,
});

const user = reactive({
  email: '',
  password: '',
  username: '',
  favoriteLanguage: '',
  firstName: '',
  lastName: '',
});

function register() {
  props.registerMutate.mutate({
    email: user.email,
    password: user.password,
    username: user.username,
    favoriteLanguage: user.favoriteLanguage,
    firstName: user.firstName,
    lastName: user.lastName,
  });

  console.log(user);
}
</script>

<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <form @submit.prevent="register">
    <div class="mb-6">
      <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your username</label
      >
      <input
        v-model="user.username"
        type="text"
        id="username"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="username"
        required
      />
    </div>
    <div class="mb-6">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your email</label
      >
      <input
        v-model="user.email"
        type="email"
        id="email"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="name@flowbite.com"
        required
      />
    </div>
    <div class="mb-6">
      <label
        for="favoriteLanguage"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your favorite language</label
      >
      <input
        v-model="user.favoriteLanguage"
        type="text"
        id="favoriteLanguage"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        placeholder="Ex. JavaScript"
        required
      />
    </div>
    <div class="mb-6">
      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your password</label
      >
      <input
        v-model="user.password"
        type="password"
        id="password"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>

    <div class="mb-6">
      <label for="firstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your Firstname</label
      >
      <input
        v-model="user.firstName"
        type="text"
        id="firstName"
        placeholder="John"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>

    <div class="mb-6">
      <label for="lastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your Lastname</label
      >
      <input
        v-model="user.lastName"
        type="text"
        placeholder="Doe"
        id="lastName"
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        required
      />
    </div>

    <div class="flex items-start mb-6"></div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Login
    </button>
  </form>
</template>

<style></style>
