import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import About from "./pages/About.vue";
import Dashbord from "./pages/Dashbord.vue";
import Notfound from "./pages/Notfound.vue";

const app = createApp(App);

const routes = [
  { path: "/dashbord", name: "Dashboard", component: Dashbord },
  { path: "/about", name: "About", component: About },
  { path: "/notfound", name: "notFound", component: Notfound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);
app.mount("#app");
