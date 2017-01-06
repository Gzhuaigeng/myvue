// export const tabChanger = function({dispatch, state}, tabIndex) {
//   dispatch('CHANGETAB', tabIndex);
// };

actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
