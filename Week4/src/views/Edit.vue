<template>
  <div class="edit">
    <CreateEditProduct createOrEdit=false :card=item />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CreateEditProduct from "@/components/CreateEditProduct.vue";
import UtilityMixin from "@/utils.ts";

@Component({
  components: {
    CreateEditProduct
  }
})

export default class About extends Vue {
  private item!:Types.Product;
  private data!:Types.jsonData;
  private utils:UtilityMixin = new UtilityMixin();
  created(){
    this.data = this.utils.getJSONData();
    this.item = this.utils.filterItem(this.data,this.$route.params.bin);
  }
}

</script>
