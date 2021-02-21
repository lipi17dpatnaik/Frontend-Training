<template>
  <div class="createOrEditForm">
    <div class="viewbar">
      <div class="viewInfo">
        <div class="title"><h3>{{ createOrEditLabel }}</h3></div>
      </div>
    </div>
    <div class="productForm">
      <h2>Basic Information</h2>
      <h4>Enter the basic details about your product</h4>
      <hr />
      <form>
        <label for="prodName">Product Name</label>
        <input type="text" class="prodName" name="prodName" v-model="card.name" :placeholder="card.name" required>
        <label for="prodDesc">Description</label>
        <input type="text" class="prodDesc" name="prodDesc" v-model="card.description" :placeholder="card.description">
        <label for="bundleId">Key Bundle ID</label>
        <select class="bundleId" name="bundleId" v-model="bundleId">
          <option value="bundleId1">Bundle ID 1</option>
          <option value="bundleId2">Bundle ID 2</option>
          <option value="bundleId3">Bundle ID 3</option>
        </select>
        <label for="cardNetwork">Card Network</label>
        <div class="cardNetworkAndLogo">
          <div class="cardNetworkLogo" :style="{backgroundColor:logoBgColor}"><img :src="logoSrc"></div>
          <div class="cardNetworkSelector">
          <select class="cardNetwork" name="cardNetwork" v-model="card.cardNetwork" :disabled="disabled" :placeholder="card.cardNetwork" @change="setLogo()" required>
            <option value="mastercard">Mastercard</option>
            <option value="visa">VISA</option>
            <option value="rupay">RuPay</option>
            <option value="amex">American Express</option>
            <option value="maestro">Maestro</option>
          </select>
          </div>
        </div>
        <div class="versionAlgo">
        <div class="version">
          <label for="protVer">Protocol Version</label>
          <select class="protVer" name="protVer" v-model="card.version" :placeholder="card.version" required>
            <option value="threeDSecure_1_0">3DSecure 1.0</option>
            <option value="threeDSecure_2_0">3DSecure 2.0</option>
          </select>
        </div>
        <div class="algo">
          <label for="aavAlgo">AAV Algorithm</label>
          <select value="aavAlgo" name="aavAlgo" class="aavAlgo">
            <option value="algo1">Algorithm 1</option>
            <option value="algo2">Algorithm 2</option>
          </select>
          </div>
        </div>
        <label for="binNo">BIN No.</label>
        <input type="number" class="binNo" name="binNo" v-model="card.bin" :disabled="disabled" :placeholder="card.bin" required>
        <br/>
        <input type="submit" value="Submit" class="submit" @click="saveValues">
        <input type="submit" value="Cancel" class="cancel" @click="goToHome">
        <div class="errorSection"></div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import data from "@/assets/cards.json";
import UtilityMixin from "@/utils.ts";
import { Types } from "@/types/type";

@Component
export default class BasicInformation  extends UtilityMixin{
  @Prop() private card!:Types.Product;
  @Prop() private createOrEdit!:boolean; // true -> create, false -> edit
  private disabled!:boolean;
  private data:Types.jsonData;
  private utils:UtilityMixin = new UtilityMixin();
  private createOrEditLabel!:string;
  private logoBgColor!:string;
  private logoSrc!:string;
  setLogo(){
    this.logoSrc = this.data.cardNetworkLogos[this.card.cardNetwork]["logoURL"];
    this.logoBgColor = this.data.cardNetworkLogos[this.card.cardNetwork]["logoBgColor"];
  }
  created(){
    this.data = this.utils.getJSONData();
    this.utils.addLoader(".productForm",1); 
    if (this.createOrEdit === "true") { 
      this.createOrEditLabel="Create Product";
      this.disabled= false;
      this.card = {id:this.utils.generateRandomProductID(),
                   name:"Product name",
                   bin:123,
                   cardNetwork:"rupay",
                   description:"Product description",
                   version:"threeDSecure_1_0",
                   config: {connectorURL: "Not available"}
                   };
    }
    else {
      this.createOrEditLabel = "Edit Product";
      this.disabled=true;
    }
    this.logoSrc = this.data.cardNetworkLogos[this.card.cardNetwork]["logoURL"];
    this.logoBgColor = this.data.cardNetworkLogos[this.card.cardNetwork]["logoBgColor"];
  }
  displayFormResult(msg:string,error:boolean):number{
    console.log(msg);
    console.log(error);
    const errorSection = document.getElementsByClassName("errorSection")[0];
    this.utils.addLoader(".errorSection",1,"block");
    errorSection.style.display = "none";
    if (error===true)
    {
      errorSection.innerHTML = `<p style="color:red;"><b>Request failed!</b><br/>${msg}</p>`;
    }
    else
    {
      errorSection.innerHTML = `<p style="color:green;"><b>Data has been stored successfully!</b></p>`;
    }
    errorSection.style.display = "block";
    setTimeout(() => {errorSection.style.display="none";},5*1000);
  }
  formValidation():number{
    if (this.card.name === "") {
      this.displayFormResult("Product name cannot be empty",true);
      return -1;
    }
    if ((this.utils.getIndex(this.data,String(this.card.bin)) !== -1) && (this.createOrEdit == "true")){
      this.displayFormResult("Please enter a unique BIN",true);
      return -1;
    }
    if (this.card.version === ""){
      this.displayFormResult("Protocol version cannot be empty",true);
      return -1;
    }
    if (this.card.cardNetwork === ""){
      this.displayFormResult("Product card network cannot be empty",true);
      return -1;
    }
    return 0;
  }
  saveValues():void{
    console.log(this.createOrEdit);
    const index = this.formValidation();
    if (index === 0){
      if (this.createOrEdit === "true"){
        // save JSON data
        this.data.products.push(this.card);
        const newData = JSON.stringify(this.data);
        localStorage.setItem('jsonData', newData);
        this.goToHome(true);
      }
      else{
        const indexItem = this.utils.getIndex(this.data,this.card.bin);
        this.data.products[indexItem] = {id:this.card.id,
                        name:this.card.name,
                        bin:this.card.bin,
                        cardNetwork:this.card.cardNetwork,
                        description:this.card.description,
                        version:this.card.version,
                        config: {connectorURL: this.card.config.connectorURL}
                        };
        // save JSON data
        const newData = JSON.stringify(this.data);
        localStorage.setItem('jsonData', newData);
        this.goToHome(true);
      }
    }
  }
  goToHome(success=false):void{
    if (success===true){
      this.$router.push({
        name:"Home",
        params: { success: true }
      });
    } else {
      this.$router.push("/");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.productForm {
  display:none;
  float:left;
  margin:20px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  border:1px solid #4d4ddc;;
  border-radius:10px;
  width:98%;
}

.cardNetworkAndLogo{
  display:flex;
  flex-direction:row;
}

.versionAlgo{
  display:flex;
  flex-direction:row;
  div{
    padding-right:10%;
    select{
      width:150%;
    }
  }
}

.errorSection {
  display:none;
}
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
  padding:20px;

  label {
    display:block;
    text-align:left;
  }

  input,select{
    margin:10px 0 10px 0;
    width:15%;
    height:20px;
    font-family:oswald;
    font-size:14px;
  }

  input[disabled],select[disabled]{
    cursor:not-allowed;
  }
}

h2,h4{
  text-align:left;
  margin-left:20px;
}

.prodDesc {
  width:30%;
  height:80px;
}

.submit,.cancel {
  width:10%;
  height:30px;
  background-color:#4d4ddc;
  color:white;
  border-color:#4d4ddc;
  border-radius:5px;
  cursor:pointer;
}

.submit:hover, .cancel:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.cancel {
  margin-left:20px;
  background-color:#80808029;
  color:black;
  border-color:#80808029;
}

img {
  height: auto;
  max-height:50px;
  width: 100px;
  vertical-align: middle;
}

.cardNetworkAndLogo{
  padding:10px 0 10px 0;
  vertical-align:middle;
}

.cardNetworkLogo{
  border-radius:10px;
  height:50px;
  line-height:50px;
  width: 100px;
  text-align: center;
}

.cardNetworkSelector{
  select{
    height:50px;
    margin:0px 0px 0px 5px;
    width:60%;
  }
}

</style>
