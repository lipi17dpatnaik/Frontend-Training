<template>
  <div class="create">
    <CreateEditProduct createOrEdit="true" />
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
}

</script>
