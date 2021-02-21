<template>
  <div class="basicInfo">
    <h2>Basic Information</h2>
    <div class="tableCardInfo">
      <table>
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
          <td>
            <div class="productLogo" :style="{backgroundColor:bgColor}"><img :src="cardLogoURL"></div>
            <div class="cardNetwork"> {{ card.cardNetwork }}</div>
          </td>
        </tr>
        <tr>
          <td>Protocol Version</td>
          <td>{{ protVersion }}</td>
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
  private protVersion!:string;
  created(){
    if (this.card.version === "threeDSecure_1_0"){
      this.protVersion = "3DSecure 1.0";
    } else{
      this.protVersion = "3DSecure 2.0";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img {
  width: auto;
  height: 50px;
}

td:nth-child(even){
  color:black;
  margin-left:20%;
  padding-left:10%;
}

.productLogo{
  border-radius:10px;
}

.cardNetwork{
  padding-left:10px;
}

td {
  padding: 10px; /* top right bottom left */
  padding-left: 0px;
  div {
    display:inline-block;
    vertical-align:middle;
    padding:2px;
    text-transform:capitalize;
  }
}

a {
  text-decoration:none;
}

.basicInfo
{
  text-align:left;
  margin-left:10px;
  float:left;
  display:none;
  h2 {
    color:#4d4ddc;
    font-weight:normal;
  }
  table {
    width:100%;
    color:gray;
  }
  width:95%;
}

</style>
