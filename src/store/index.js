import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    zaposleni:[],
    rMesta:[],
    zaposleniIDs: [],
    rMesraIDs:[],
    kursevi:[],
    kurseviIDs:[],
    token: ''
  },
  getters:{
    isLoggedIn: state => {
      return state.token;
    },

  },
  mutations: {
    addZaposleni(state, zaposlen) {

      state.zaposleni.push(zaposlen);
    },
    addDepartments(state, deps) {
      state.rMesta.push(deps);
    },
    setZaposleniIDs(state, ids) {
      state.zaposleniIDs = ids;
    },
    addIDsToZaposlen(state, obj) {
      const zaposlen = state.zaposleni.filter( dep => dep.zaposleniIDs == obj.id )[0];
      zaposlen['zaposleniIDs'] = obj.zaposleniIDs;
    },
   setZaposleni(state, zaposlen){
     state.zaposleni=zaposlen;
   },

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;

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
    loadRMesta({commit}){
      fetch('http://127.0.0.1:8081/listRadnaMesta')
          .then( obj => obj.json() )
          .then( res =>  commit('addDepartments',res));
    },
   loadKurseve({commit}){
     fetch('http://127.0.0.1:8081/listKursevi')
         .then( obj => obj.json() )
         .then( res => this.kursevi=res);
   },

    loadZaposleni: function ({ commit }) {
      fetch('http://127.0.0.1:8081/getUserIDs', { method: 'get' },).then((response) => {
        if (!response.ok)
          throw response;

        return response.json()
      }).then((jsonData) => {

        commit('addZaposleni', jsonData)
      }).catch((error) => {
        if (typeof error.text === 'function')
          error.text().then((errorMessage) => {
            alert(errorMessage);
          });
        else
          alert(error);
      });
    },
    async fetchIDsByDepartment({ commit, state }, depID) {

      const zaposlen = state.zaposleni.filter( dep => dep.zaposleniIDs === depID )[0];
      if (zaposlen && zaposlen['zaposleniIDs']) {
        commit('setZaposleniIDs', zaposlen['zaposleniIDs']);
      } else {
        const obj = await fetch(`http://127.0.0.1:8081/getUser/${depID}`);
        const res = await obj.json();

        commit('addIDsToZaposlen', {
          id: depID,
          zaposleniIDs: res.id_usera
        });

        commit('setZaposleniIDs', res.id_usera);
      }
    },


  },
  modules: {
  }
})
