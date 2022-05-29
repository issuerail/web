import { Loading } from 'quasar';
import { requestPost } from 'src/requests/rest-api';
import { showErrorMessageWithTitle } from 'src/functions/show-error-message';

export async function login({ dispatch }, { email, password }) {
  Loading.show();
  try {
    const user = await requestPost('/login', {
      email,
      password,
    });

    dispatch('loggedIn', user);

    if (this.$router.currentRoute.value.fullPath === '/login') {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      this.$router.push('/').catch(() => {});
    }
  } catch (e) {
    showErrorMessageWithTitle('Could not sign in', e.message);
  } finally {
    Loading.hide();
  }
}

export function loggedIn({ dispatch }, user) {
  dispatch('users/login', user, { root: true });
}

export function logout({ dispatch }) {
  dispatch('users/logout', null, { root: true });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  this.$router.push('/login').catch(() => {});
}

export function setUsersLoaded({ commit }, value) {
  commit('setUsersLoaded', value);
}

export function resetState({ commit }) {
  commit('setUsersLoaded', false);
}
