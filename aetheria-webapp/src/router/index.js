// import Vue from "vue"
import { createWebHistory, createRouter} from "vue-router"
// import Login from "../views/Login.vue"
import Patients from "../views/Patients.vue"

// Vue.use(VueRouter)

const history = createWebHistory();

const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Patients
    }
  ]
})

export default router
