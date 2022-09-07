<template>
  <div>
  <div v-if="token">
    <Table></Table>
  </div>
  <div v-if="!token">
    <WPage></WPage>
  </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import WPage from "@/components/WPage";
import Table from "@/components/Table";
export default {
  name: "Home",
components:{
    WPage,
   Table
},
  computed: {
    ...mapState([
      'token'
    ])
  },

  mounted(){

  }
}
</script>

<style scoped>

</style>