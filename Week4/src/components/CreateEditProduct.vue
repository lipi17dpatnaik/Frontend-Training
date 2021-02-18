<template>
  <div class="basicInfo">
    <div id="viewbar">
      <div class="viewInfo">
        <div class="title"><h3>{{ createOrEdit }}</h3></div>
      </div>
    </div>
    <div class="productForm">
      <h2>Basic Information</h2>
      <h4>Enter the basic details about your product</h4>
      <hr />
      <form>
        <label for="prodName">Product Name</label>
        <input type="text" id="prodName" name="prodName" v-model="prodName" :placeholder="prodName">
        <label for="prodDesc">Description</label>
        <input type="text" id="prodDesc" name="prodDesc" v-model="prodDesc" :placeholder="prodDesc">
        <label for="bundleId">Key Bundle ID</label>
        <select id="bundleId" name="bundleId" v-model="bundleId">
          <option value="bundleId1">Bundle ID 1</option>
          <option value="bundleId2">Bundle ID 2</option>
          <option value="bundleId3">Bundle ID 3</option>
        </select>
        <label for="cardNetwork">Card Network</label>
        <select id="cardNetwork" name="cardNetwork" v-model="cardNetwork" :disabled="disabled" :placeholder="cardNetwork">
          <option value="mastercard">Mastercard</option>
          <option value="visa">VISA</option>
          <option value="rupay">RuPay</option>
          <option value="amex">American Express</option>
          <option value="maestro">Maestro</option>
        </select>
        <label for="protVer">Protocol Version</label>
        <select id="protVer" name="protVer" v-model="protVer" :placeholder="protVer">
          <option value="threeDSecure_1_0">3DSecure1.0</option>
          <option value="threeDSecure_2_0">3DSecure2.0</option>
        </select>
        <label for="aavAlgo">AAV Algorithm</label>
        <select value="aavAlgo" name="aavAlgo" v-model="aavAlgo">
          <option value="algo1">Algorithm 1</option>
          <option value="algo2">Algorithm 2</option>
        </select>
        <label for="binNo">BIN No.</label>
        <input type="number" id="binNo" name="binNo" v-model="binNo" :disabled="disabled" :placeholder="binNo">
        <br/>
        <input type="submit" value="Submit" id="submit" @click="saveValues">
        <input type="submit" value="Cancel" id="cancel" @click="goToHome">
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import data from "@/assets/cards.json";

@Component
export default class BasicInformation  extends Vue {
  @Prop() private prodName!;
  @Prop() private prodID!;
  @Prop() private bundleId! = "";
  @Prop() private prodDesc!;
  @Prop() private binNo!;
  @Prop() private cardNetwork!;
  @Prop() private protVer!;
  @Prop() private aavAlgo!;
  @Prop() private createOrEdit!:string;
  @Prop() private disabled!;
  private data;
  public getJSONData():void{
    this.data = JSON.parse(localStorage.getItem('jsonData'));
  };
  created(){
    this.getJSONData();
  }
  saveValues():void{
    if (this.createOrEdit==="Create Product"){
      const newProduct = {id:"PRO00009",
                        name:this.prodName,
                        bin:this.binNo,
                        cardNetwork:this.cardNetwork,
                        description:this.prodDesc,
                        version:this.protVer,
                        config: {connectorURL: "Not available"}
                        };
      this.data.products.push(newProduct);
    }
    else{
      const index = localStorage.getItem("selectedIndex");
      const connectorURLValue = this.data.products[index].config.connectorURL;
      this.data.products[index] = {id:this.prodID,
                        name:this.prodName,
                        bin:this.binNo,
                        cardNetwork:this.cardNetwork,
                        description:this.prodDesc,
                        version:this.protVer,
                        config: {connectorURL: connectorURLValue}
                        };
    }
    // save JSON data
    const newData = JSON.stringify(this.data);
    localStorage.setItem('jsonData', newData);
    this.$router.push("/");
  }
  goToHome():void{
    this.$router.push("/");
  }
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
form {
  text-align:left;
  padding:5px;

  label {
    display:block;
    text-align:left;
  }
}
</style>
