// import Vue from "vue"
import { createWebHistory, createRouter} from "vue-router"
import Login from '../views/Login.vue'

// Vue.use(VueRouter)

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    }
  ]
})

export default router
