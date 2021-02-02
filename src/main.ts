/*
 * @Description: 前端共享平台主入口
 * @Autor: zhenghui
 * @Date: 2021-01-28 10:33:40
 */
import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import './assets/styles/reset.scss';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app');