export function appReady(state, getters, rootState, rootGetters) {
  return !!rootGetters['users/currentUser'];
}

export function projectsLoaded(state) {
  return state.projectsLoaded;
}
