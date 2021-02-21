import data from "@/assets/cards.json";
import { Component, Vue } from "vue-property-decorator";
import { Types } from "@/Types/types";
import { Types } from "@/types/type";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

@Component
export default class UtilityMixin extends Vue {
  addLoader(query:string,timeInSec:number,display="inline-block"){
    const loader = this.$loading.show({
      loader: 'spinner'
    });
    setTimeout(() => {
      loader.hide();
      document.querySelectorAll(query).forEach(a=>a.style.display=display);
    }, timeInSec*1000);
  }
  getJSONData(){
    if (localStorage.getItem('jsonData') === null){
      localStorage.setItem('jsonData',JSON.stringify(data));
      return data;
    }
    else {
      return JSON.parse(localStorage.getItem('jsonData'));
    }  
  }
  
  filterItem(data:Types.jsonData, bin:string){
    return data.products.filter(i =>i.bin === bin)[0];
  }

  getIndex(data:Types.jsonData, bin:string){
    return data.products.findIndex(x => x.bin === bin);
  }

  getLogoURL(data:Types.jsonData, logo:string):string{
    return data.cardNetworkLogos[logo]["logoURL"];
  }
 
  getLogoBgColor(data:Types.jsonData, logo:string):string{
    return data.cardNetworkLogos[logo]["logoBgColor"];
  }

  generateRandomProductID():string{
    const max = 99999;
    const min = 1;
    return "PRO" + String(Math.floor(Math.random() * (max - min + 1) + min)).padStart(5,"0");
  }
};
