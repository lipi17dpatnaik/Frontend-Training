<template>
  <div class="home">
    <div class="viewbar">
      <div class="viewInfo">
        <div class="title"><h3>Products</h3></div>
        <div class="info">An overview of all your products available in the Authentication Center</div>
      </div>
      <div class="statusMessage">
         <slot>{{ success }}</slot>
      </div>
      <div class="displayButton">
        <router-link to="/create/new">+ Create Product</router-link>
      </div>
    </div>
    <Card v-for="item in items" :key="item.bin" :card="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Card.vue"; // @ is an alias to /sric
import { Types } from "@/types/types";
import { addLoader, getJSONData, getLogoBgColor, getLogoURL } from "@/utils.ts"; 

@Component({
  components: {
    Card
  }
})

export default class Home extends Vue{
  private items!:Types.Product[];
  private data!:Types.jsonData;
  private success = this.$route.params.success;
  getLogoBgColor;
  created(){
    addLoader(".cardsContainer",1.5);
    this.data = getJSONData();
    this.items = this.data.products;
    if (typeof(this.success)!=="undefined"){
      this.success = "Data updated successfully!"
    };
  }
  mounted(){
    const statusSection = document.getElementsByClassName("statusMessage")[0];
    setTimeout(() => statusSection.style.display="none",5*1000);
  }
}
</script>

<style>
.cardsContainer {
  display:none;
}

</style>
