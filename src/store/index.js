import { createStore } from 'vuex';
import router from '../router';

export default createStore({
  state: {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    userLoggedIn: !!localStorage.getItem('user'),
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },

    setToken(state, token) {
      state.token = token;
    },

    logout(state) {
      state.user = null;
      state.token = null;
      state.userLoggedIn = !state.userLoggedIn;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      router.push('/login');
    },
  },
});
