import { createStore } from 'vuex'
import patients from './modules/patients'
import auth from './modules/auth'

const store = createStore({
  modules: {
    patients,
    auth,
  }
})

store.state.patients
store.getters.allPatientsIDs

export default store;
