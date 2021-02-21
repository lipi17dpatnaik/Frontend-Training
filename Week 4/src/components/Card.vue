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
import UtilityMixin from "@/utils.ts";
import { Types } from "@/types/types";

@Component
export default class Card extends Vue {
  private utils:UtilityMixin = new UtilityMixin();
  @Prop() private card!:Types.Product;
  @Prop() private cardURL!:string;
  @Prop() private bgColor!:string;
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
