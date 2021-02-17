<template>
  <div class="home">
    <HelloWorld v-for="item in items" :key="item.id" :msg="item.title" :prodNo="item.prod" :binNo="item.bin" :cardType="item.card" />
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



export default class Home extends Vue {
  private items = [
	{
		id:1,
		title: 'First Product',
		prod:'PROD000',
		bin:'123456',
		card:'visa'
	},
	{
                id:2,
                title: 'First Product',
                prod:'PROD000',
                bin:'123456',
                card:'rupay'
        }
  ];
}
</script>

<style>
.hello {
  display:inline-block;
}
</style>
