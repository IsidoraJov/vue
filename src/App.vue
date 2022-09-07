<template>
  <div id="app">

    <div>
      <b-navbar b-navbar id='nav' toggleable="sm" type="dark" variant="dark">
        <div class="container-fluid">


        <b-navbar-brand to="/">SPACE</b-navbar-brand>
          <span v-if="token">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>



          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>

          <b-nav-item-dropdown  text="RADNA MESTA">
              <b-dropdown-item
                  v-for="dep in rMesta"
                  :key="dep.id"
                  :to="`/rMesta/${dep.id}/${dep.naziv}`">
                {{ dep.naziv }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown  text="DOSTUPNI KURSEVI">
              <b-dropdown-item
                  v-for="dep in kursevi"
                  :key="dep.id"
                  :to="`/zaposleni/${dep.id}/${dep.naziv}`">
                {{ dep.naziv }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>

          </span>



            <b-navbar-nav class="ml-auto">
              <b-nav-item v-if="!token" to="/register">Register</b-nav-item>
              <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
              <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
              <b-nav-item v-if="token" to="/profilePage">My Profile</b-nav-item>

            </b-navbar-nav>
             <form class=" form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>

        </div>
      </b-navbar>


    </div>
    <div>



     </div>
    <router-view/>
  </div>
</template>

<script>

import Table from "@/components/Table";
import WPage from "@/components/WPage";
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: 'App', 
  components: {
      WPage,
    Table
  },


  data() {
    return {
      //key:'departments',
      searchQuery: ''

    }
  },

  computed: {
    ...mapState([
     'zaposleni',
      'kursevi',
      'rMesta',
      'token'
    ])
  },

  mounted() {
    this.loadZaposleni();
    this.loadRMesta();
    this.loadKurseve();
    if (localStorage.token) {
      this.setToken(localStorage.token);
    }

    console.log("sad"+this.token+"asd")
  },

  methods: {

...mapActions([
        'loadZaposleni',
        'loadRMesta',
        'loadKurseve'
      ]),



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

<style >
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 10px;
  }
  *#nav{
    padding-left: 10px;
    padding-right: 10px;
  }


</style>
