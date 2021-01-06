import { createStore } from 'vuex'
import patients from './modules/patients'
// import Auth from './modules/Auth'

const store = createStore({
  modules: {
    patients
    // auth: Auth,
  }
})

store.state.patients

export default store;
