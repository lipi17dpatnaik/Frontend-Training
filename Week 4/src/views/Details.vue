<template>
  <div class="about">
    <div id="viewbar">
      <div class="viewInfo">
	<div class="title"><h3>View Details</h3></div>
        <div class="info">Details of your product ID: {{ item.id }}</div>
	</div>
      <div class="displayButton">
        <router-link :to="{ name: 'Edit', params:{bin: item.bin}}">Edit Product</router-link>
      </div>
    </div>
    <BasicInformation :card="item" :cardLogoURL="utils.getLogoURL(data,item.cardNetwork)" :bgColor="utils.getLogoBgColor(data,item.cardNetwork)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasicInformation from "@/components/BasicInformation.vue"
import UtilityMixin from "@/utils.ts";
import { Types } from "@/types/types";

@Component({
  components: {
    BasicInformation
  }
})

export default class About extends Vue {
  private data!:Types.jsonData;
  private item!:Types.Product;
  private utils:UtilityMixin = new UtilityMixin();
  created(){
    this.data = this.utils.getJSONData();
    this.utils.addLoader(".basicInfo",1);
    this.item = this.utils.filterItem(this.data,this.$route.params.bin);
  }
}

</script>
