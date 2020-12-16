import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      patients: []
    }
  }
})

export default store;