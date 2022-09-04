import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    departments: [],
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },
    set_users: function( state, users){
      state.users= users
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    }
  },
  actions: {


    register({ commit }, obj) {
      fetch('http://127.0.0.1:8087/registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      }).then( res => res.json() )
        .then( tkn => commit('setToken', tkn.token) );
    },

    login({ commit }, obj) {
      fetch('http://127.0.0.1:8087/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',  "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
        }
      });
    },
    load_users: function ({ commit }) {
      fetch(apiBaseUrl + 'http://127.0.0.1:8087/listUsers', { method: 'get' },).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {
        commit('set_users', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },

  },
  modules: {
  }
})
