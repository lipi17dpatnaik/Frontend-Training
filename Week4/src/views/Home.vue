<template>
  <div class="home">
    <div id="viewbar">
      <div class="viewInfo">
        <div class="title"><h3>Products</h3></div>
        <div class="info">View details of all your product</div>
      </div>
      <div class="displayButton">
        <router-link to="/create">Create Product</router-link>
      </div>
    </div>
    <Cards v-for="(item,index) in items" :key="item.bin" :msg="item.name" :prodNo="item.id" :binNo="item.bin" :cardType="item.cardNetwork" :cardURL="getLogoURL(item.cardNetwork)" :bgColor="getLogoBgColor(item.cardNetwork)" :itemIndex="index" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Cards from "@/components/Cards.vue"; // @ is an alias to /src
import data from "@/assets/cards.json";

@Component({
  components: {
    Cards
  }
})

export default class Home extends Vue {
  public items;
  public data;
  public getJSONData():void{
    if (localStorage.getItem('jsonData') === null){
      this.data = data;
      const jsonData = localStorage.setItem('jsonData',
                     JSON.stringify(this.data));
    }
    else{
      this.data= JSON.parse(localStorage.getItem('jsonData'));
    }
    this.items = this.data.products;
    
  };
  public getLogoURL(logo:string):string{
    return data.cardNetworkLogos[logo]["logoURL"];
  };
  public getLogoBgColor(logo:string):string{
    return data.cardNetworkLogos[logo]["logoBgColor"];
  };
  created(){
    this.getJSONData();
  }
}
</script>

<style>
.cardsContainer {
  display:inline-block;
}
#displayButton a{
  color:white;
}
</style>
