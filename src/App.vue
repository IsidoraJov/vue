<template>
  <div id="app">
     
      <b-navbar id='nav' toggleable="sm" type="dark" variant="dark">
        <b-navbar-brand to="/welcomePage">SPACE</b-navbar-brand>


          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
            <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>


            
          </b-navbar-nav>

      </b-navbar>


    <Section />
    <router-view/>
  </div>
</template>

<script>
import Heder from '@/components/Heder.vue'

import Section from './components/Section.vue'
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'App', 
  components: {
  },

  /*, data(){
     return{

     }
}/*,
   mounted(){
     fetch('http://127.0.0.1:8081/listUsers')
       .then( obj => obj.json() )
      .then(res => {

      })
   }*/

  data() {
    return {
      searchQuery: ''
    }
  },

  computed: {
    ...mapState([

      'token'
    ])
  },

  mounted() {
   // this.fetchDepartments();

    if (localStorage.token) {
      this.setToken(localStorage.token);
    }
  },

  methods: {

    ... mapMutations([
      'removeToken',
      'setToken'
    ]),



    search(e) {
      e.preventDefault();

      const sq = this.searchQuery;
      this.searchQuery = '';

      this.$router.push({ name: 'Search', query: { q: sq } });
    },

    logout() {
      this.removeToken();
    }
  },

  /*sockets: {
    error(err) {
      alert(err);
    }
  }*/

}
 
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 10px;
  }
  #nav{
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
