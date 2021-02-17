<template>
  <div class="hello">
    <div class="card">
      <div class="cardBg">
        <div class="cardLogo" 
	:style="{backgroundImage:'url(../assets/'+ cardType +'.png)'}"></div>
      </div>
      <h1>{{ msg }}</h1>
      <h2><span>{{ prodNo }}</span></h2>
      <h3>BIN-{{ binNo }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  @Prop() private prodNo!:string;
  @Prop() private binNo!:number;
  @Prop() private cardType!:string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardBg {
  margin:0px;
  background:black;
  height:50px;
  display:flex;
}

.cardLogo{
  margin-right:auto;
  margin-top:auto;
  margin-bottom:auto;
  padding:5px;
  height:50px;
}

.card {
  border-radius:10px;
  border: 2px solid black;
  padding:0px;
  width:300px;
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

</style>
