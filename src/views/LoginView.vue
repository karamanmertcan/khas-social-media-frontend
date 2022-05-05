<script setup>
import { useMutation } from 'vue-query';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import LoginForm from '../components/forms/LoginForm.vue';
import * as Queries from '../utils/queries';
import { provider } from '../firebase';

const store = useStore();
const router = useRouter();
const auth = getAuth();

const loginMutation = useMutation(Queries.login, {
  onSuccess: (data) => {
    store.commit('setUser', data.user);
    store.commit('setToken', data.accessToken);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.accessToken));
    store.commit('toggleAuth');
    if (data.authType === 'register') {
      router.push('/user-info-edit');
    } else {
      router.push('/');
    }
  },
  onError: (error) => {
    console.log(error);
  },
});

const githubAuth = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const { user } = result;

      if (user) {
        loginMutation.mutate({
          githubToken: token,
          githubUid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        });
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('error', errorCode);
      console.log('error', errorMessage);

      // The email of the user's account used.
      // const { email } = error;
      // The AuthCredential type that was used.
      // const credential = GithubAuthProvider.credentialFromError(error);
      // ...
    });
};
</script>

<template>
  <div class="container md:max-w-xl max-w-sm mx-auto h-screen mt-10">
    <div class="w-full text-center">
      <div class="font-bold text-5xl">Login</div>
    </div>
    <LoginForm :loginMutate="loginMutation" />

    <span class="font-bold text-xl flex justify-center my-10">or</span>

    <div class="w-full h-auto flex justify-center">
      <button @click="githubAuth" class="bg-black w-48 h-12 rounded-full flex items-center justify-center">
        <span class="text-lg text-white font-bold"> Github </span>
      </button>
    </div>

    <div class="w-full text-center mt-10">
      <a href="/register" class="text-blue-700 hover:text-blue-800">You don't have an account ? Register</a>
    </div>
  </div>
</template>

<style></style>
