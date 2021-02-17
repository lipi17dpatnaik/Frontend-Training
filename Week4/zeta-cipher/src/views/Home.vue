<template>
  <div class="home">
    <HelloWorld msg="First Product Updated" prodNo="PROD0000" binNo="123456" cardType="visa"/>
    <HelloWorld msg="First Product Updated" prodNo="PROD0000" binNo="123456" cardType="rupay"/>
    <HelloWorld msg="First Product Updated" prodNo="PROD0000" binNo="123456" cardType="mastercard"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style>
.hello {
  display:inline-block;
}
</style>
