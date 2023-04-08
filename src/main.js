import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MyUi from "./libs/myui";
import "./assets/main.css";
import PageLoading from '@/components/PageLoading/PageLoading'
const app = createApp(App)
app.config.globalProperties.$PageLoading = PageLoading


app.use(store).use(MyUi).use(router).mount("#app");
