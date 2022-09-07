<template>
  <div>

 <!--   <b-table
        id:table
        hover v-if="zaposleni.length"
        sticky-header="800px"
        :items="zaposleni"
        :fields="fields"
        head-variant="light"

    >


    </b-table>
    <h1 v-else>No <data value=""</h1>-->


    <b-table
        id="table"
        hover
        fixed
        :items="zaposleni"
        :fields="fields"
        small
        :per-page="perPage"
        :current-page="currentPage"

    >
      <template #cell(isHighlight)="data">
        <b-icon v-if="data.value" icon="check-square" variant="success" scale="2"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="2"></b-icon>
      </template>
    </b-table>
    <b-pagination
        v-model="currentPage"
        :total-rows="zaposleni.length"
        :per-page="perPage"
        aria-controls="image-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  name: "Table",
  computed: {
    ...mapState(['zaposleni'],['zaposleniIDs']),

    zaposleni() {
      return this.$store.state.zaposleni;
    },

  },
  props: {

    item: Object
  },
  data() {

    return {
      fields: ['zaposleni.username', 'zaposleni.email', 'zaposleni.broj_telefona', 'zaposleni.steceno_obrazovanje'],
      items: [],
      currentPage: 1,
      perPage: 10
    };
  },

  methods: {
    ...mapActions(['delete_recipe']),


  },

  watch: {
    currentPage(nVal, oVal) {
      this.z.slice((this.currentPage-1) * this.perPage, (this.currentPage) * this.perPage).map( id => {
        this.getItem(id).then( obj => this.zaposleni.push(obj) );
      });
    },

    imageIDs(nVal, oVal) {
      this.currentPage = 1;
      this.items = [];

      nVal.slice((this.currentPage-1) * this.perPage, (this.currentPage) * this.perPage).map( id => {
        this.getItem(id).then( obj => this.zaposleni.push(obj) );
      });
    }
  },

  mounted() {
    this.zaposleni.slice(this.currentPage * this.perPage, (this.currentPage + 1) * this.perPage).map( id => {
      this.getItem(id).then( obj => this.zaposleni.push(obj) );
    });
  },

}
</script>

<style scoped>

</style>