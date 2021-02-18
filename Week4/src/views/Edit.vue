<template>
  <div class="edit">
    <CreateEditProduct createOrEdit="Edit Product" :prodName="item.name" :prodID="item.id" :prodDesc="item.description" :binNo="item.bin" :cardNetwork="item.cardNetwork" :protVer="item.version" :disabled="true"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreateEditProduct from "@/components/CreateEditProduct.vue"

@Component({
  components: {
    CreateEditProduct
  }
})

export default class About extends Vue {
  public item;
  public data;
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
