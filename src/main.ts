import { createApp } from 'vue';
import App from './App.vue';
import { Button } from 'vant';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

const app = createApp(App);

dayjs.locale('zh-ch');
app.config.globalProperties.$dayjs = dayjs;

app.use(Button);

app.mount('#app');
