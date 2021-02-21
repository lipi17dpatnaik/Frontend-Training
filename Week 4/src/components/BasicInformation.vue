<template>
  <div class="basicInfo">
    <h2>Basic Information</h2>
    <div class="tableCardInfo">
      <table style="width:100%">
        <tr>
          <td>Product Name</td>
          <td>{{ card.name }}</td>
        </tr>
        <tr>
          <td>Product ID</td>
          <td>{{ card.id }}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{{ card.description }}</td>
        </tr>
        <tr>
          <td>BIN Number</td>
          <td>{{ card.bin }}</td>
        </tr>
        <tr>
          <td>Connector URL</td>
          <td>{{ card.config.connectorURL  }}</td>
        </tr>
        <tr>
          <td>Card Network</td>
          <td><img :src="cardLogoURL" :style="{backgroundColor:bgColor}"> {{ card.cardNetwork }}</td>
        </tr>
        <tr>
          <td>Protocol Version</td>
          <td>{{ card.version }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Types } from "types/types";

@Component
export default class BasicInformation  extends Vue {
  @Prop() private cardLogoURL!:string;
  @Prop() private bgColor!:string;
  @Prop() private card!:Types.Product;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  width: auto;
  height: 50px;
}
tr {
  text-align:left;
}

a {
  text-decoration:none;
}

.basicInfo
{
  display:none;
}

</style>
