<template>
  <div class="edit">
    <CreateEditProduct createOrEdit="false" :card=item />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreateEditProduct from "@/components/CreateEditProduct.vue";
import { getJSONData, filterItem } from "@/utils.ts";

@Component({
  components: {
    CreateEditProduct
  }
})

export default class About extends Vue {
  private item!:Types.Product;
  private data!:Types.jsonData;
  created(){
    this.data = getJSONData();
    this.item = filterItem(this.data,this.$route.params.bin);
  }
}

</script>
