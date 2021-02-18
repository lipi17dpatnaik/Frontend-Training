<template>
  <div class="about">
    <div id="viewbar">
      <div class="viewInfo">
	<div class="title"><h3>View Details</h3></div>
        <div class="info">Details of your product ID: {{ prodNo }}</div>
	</div>
      <div class="displayButton">
        <router-link to="/edit">Edit Product</router-link>
      </div>
    </div>
    <BasicInformation :prodName="item.name" :prodID="item.id" :prodDesc="item.description" :prodBIN="item.bin" :prodConnURL="item.config.connectorURL" :prodCardType="item.cardNetwork" :prodProt="item.version" :cardLogoURL="getLogoURL(item.cardNetwork)" :bgColor="getLogoBgColor(item.cardNetwork)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasicInformation from "@/components/BasicInformation.vue"

@Component({
  components: {
    BasicInformation
  }
})

export default class About extends Vue {
  public item;
  public data;
  private prodNo = localStorage.getItem("selectedProd");
  public getLogoURL(logo:string):string{
    return this.data.cardNetworkLogos[logo]["logoURL"];
  };
  public getLogoBgColor(logo:string):string{
    return this.data.cardNetworkLogos[logo]["logoBgColor"];
  };
  private index = localStorage.getItem("selectedIndex");
  public getJSONData():void{
    this.data = JSON.parse(localStorage.getItem('jsonData'));
    this.item = this.data.products[this.index];
  };
  created(){
    this.getJSONData();
  }
}

</script>
