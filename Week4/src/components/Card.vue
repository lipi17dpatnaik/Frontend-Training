<template>
  <div class="cardsContainer">
    <div class="card">
      <div class="cardBg" :style="{backgroundColor:bgColor}">
        <div class="cardLogo"><img :src="cardURL" :alt="cardType">
</div>
      </div>
      <h1>
        <router-link :to="{name:'Details', params:{bin:card.bin}}">
          {{ card.name }}
        </router-link>
      </h1>
      <h2><span>{{ card.id }}</span></h2>
      <h3>BIN-{{ card.bin }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Types } from "@/types/types";
import { getJSONData, getLogoURL, getLogoBgColor } from "@/utils.ts";

@Component
export default class Card extends Vue {
  @Prop() private card!:Types.Product;
  private cardURL!:string;
  private bgColor!:string;
  private data!:Types.jsonData;
  created(){
    this.data = getJSONData();
    this.cardURL = getLogoURL(this.data,this.card.cardNetwork);
    this.bgColor = getLogoBgColor(this.data,this.card.cardNetwork);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardBg {
  margin:0px;
  background:black;
  height:90px;
  display:flex;
}

.cardLogo{
  margin-right:auto;
  margin-top:auto;
  margin-bottom:auto;
  padding:5px;
  height:60px;
}

.card {
  border-radius:10px;
  border: 2px solid black;
  padding:0px;
  width:400px;
  height:auto;
  margin: 10px;
}
h1 {
  text-align: left;
  font-weight:normal;
  padding:5px;
  font-size:1.2em;
  a { color: black;}
  a:hover {color: #4d4ddc;}
}
h2{
  text-align:left;
  font-weight:normal;
  span {
    padding:2px;
    background-color:#0000003b;
  }
  padding:5px;
  font-size:1em;
}
h3 {
  text-align:left;
  font-weight:normal;
  padding:5px;
  font-size:0.8em;
}

img {
    width: auto;
    height: 50px;
}

a {
  text-decoration:none;
}

</style>
