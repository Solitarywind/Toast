import Vue from 'vue';
import toast from './Toast';

const Toast = Vue.extend(toast);

export default ({msg,type},duration = 2500) => {
     const app = new Toast ({
         el:document.createElement('div'),
         data(){
             return {
                 msg,
                 type,
             }
         }
     });
     if(duration < 1500){
         duration = 1500
     }
     document.body.appendChild(app.$el);
     setTimeout(() => {
         app.flag = false
     },duration-500);
     setTimeout(() => {
         document.body.removeChild(app.$el);
     },duration)
}


