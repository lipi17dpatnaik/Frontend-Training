import data from "@/assets/cards.json";
import { Component, Vue } from "vue-property-decorator";
import { Types } from "@/types/type";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

export const addLoader = (query:string,timeInSec:number,display="inline-block") => {
    const loader = Vue.$loading.show({
      loader: 'spinner'
    });
    setTimeout(() => {
      loader.hide();
      document.querySelectorAll(query).forEach(a=>a.style.display=display);
    }, timeInSec*1000);
};

export const getJSONData = () => {
    if (localStorage.getItem('jsonData') === null){
      localStorage.setItem('jsonData',JSON.stringify(data));
      return data;
    }
    else {
      return JSON.parse(localStorage.getItem('jsonData'));
    }  
};
  
export const filterItem = (data:Types.jsonData, bin:string) => {
    return data.products.filter(i =>i.bin === bin)[0];
};

export const getIndex = (data:Types.jsonData, bin:string) => {
    return data.products.findIndex(x => x.bin === bin);
};

export const getLogoURL = (data:Types.jsonData, logo:string):string => {
    return data.cardNetworkLogos[logo]["logoURL"];
};
 
export const getLogoBgColor = (data:Types.jsonData, logo:string):string => {
    return data.cardNetworkLogos[logo]["logoBgColor"];
};

export const generateRandomProductID = ():string => {
    const max = 99999;
    const min = 1;
    return "PRO" + String(Math.floor(Math.random() * (max - min + 1) + min)).padStart(5,"0");
};
