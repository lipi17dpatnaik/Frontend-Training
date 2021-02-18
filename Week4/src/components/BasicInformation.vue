<template>
  <div class="basicInfo">
    <h2>Basic Information</h2>
    <div class="tableCardInfo">
      <table style="width:100%">
        <tr>
          <td>Product Name</td>
          <td>{{ prodName }}</td>
        </tr>
        <tr>
          <td>Product ID</td>
          <td>{{ prodID }}</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>{{ prodDesc }}</td>
        </tr>
        <tr>
          <td>BIN Number</td>
          <td>{{ prodBIN }}</td>
        </tr>
        <tr>
          <td>Connector URL</td>
          <td>{{ prodConnURL }}</td>
        </tr>
        <tr>
          <td>Card Network</td>
          <td><img :src="cardLogoURL" :style="{backgroundColor:bgColor}"> {{ prodCardType }}</td>
        </tr>
        <tr>
          <td>Protocol Version</td>
          <td>{{ prodProt }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BasicInformation  extends Vue {
  @Prop() private prodName!: string;
  @Prop() private prodID!:string;
  @Prop() private prodDesc!:string;
  @Prop() private prodBIN!:number;
  @Prop() private prodConnURL!:string;
  @Prop() private cardLogoURL!:string;
  @Prop() private prodCardType!:string;
  @Prop() private prodProt!:string;
  @Prop() private bgColor!:string;
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

</style>
