import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from "./router/index";
import * as Icons from '@element-plus/icons-vue';

//全局注册图标 牺牲一点性能
for(let i in Icons){
    console.log((Icons as any)[i])
}
const app = createApp(App)
app.use(router).use(ElementPlus)
app.mount('#app')

