<template>
  <div class="about">
    <div class="viewbar">
      <div class="viewInfo">
	<div class="title"><h3>{{ item.name }}</h3></div>
        <div class="info">{{ item.description }}</div>
	</div>
      <div class="displayButton">
        <router-link :to="{ name: 'Edit', params:{bin: item.bin}}">Edit Product</router-link>
      </div>
    </div>
    <BasicInformation :card="item" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BasicInformation from "@/components/BasicInformation.vue";
import { getJSONData, filterItem, getLogoURL, getLogoBgColor } from "@/utils.ts";
import { Types } from "@/types/types";

@Component({
  components: {
    BasicInformation
  }
})

export default class About extends Vue {
  private data!:Types.jsonData;
  private item!:Types.Product;
  created(){
    this.data = getJSONData();
    this.item = filterItem(this.data,this.$route.params.bin);
  }
}

</script>
