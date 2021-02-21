<template>
  <div class="home">
    <div id="viewbar">
      <div class="viewInfo">
        <div class="title"><h3>Products</h3></div>
        <div class="info">View details of all your product</div>
      </div>
      <div class="statusMessage">
         <slot>{{ success }}</slot>
      </div>
      <div class="displayButton">
        <router-link to="/create/new">Create Product</router-link>
      </div>
    </div>
    <Card v-for="item in items" :key="item.bin" :card="item" :cardURL="utils.getLogoURL(data,item.cardNetwork)" :bgColor="utils.getLogoBgColor(data,item.cardNetwork)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UtilityMixin from "@/utils.ts";
import Card from "@/components/Card.vue"; // @ is an alias to /sric
import { Types } from "@/types/types";

@Component({
  components: {
    Card
  }
})

export default class Home extends Vue{
  private items!:Types.Product[];
  private data!:Types.jsonData;
  private success = this.$route.params.success;
  private utils:UtilityMixin = new UtilityMixin();
  created(){
    this.utils.addLoader(".cardsContainer",1.5);
    this.data = this.utils.getJSONData();
    this.items = this.data.products;
    console.log(this.success);
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
