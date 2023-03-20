import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MyUi from "./libs/myui";
createApp(App).use(store).use(MyUi).use(router).mount("#app");
