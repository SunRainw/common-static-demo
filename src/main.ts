import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
// import { Button, message, Form, FormItem } from "ant-design-vue";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(FormItem).use(Form);

// app.config.globalProperties.$message = message;

app.mount("#app");
