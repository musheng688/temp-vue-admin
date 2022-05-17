import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

let app = createApp(App);
let pinia = createPinia();

for (const name in ElementPlusIconsVue) {
  app.component(name, ElementPlusIconsVue[name]);
}

app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(pinia);
app.mount("#app");
