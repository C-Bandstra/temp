import api from '../../apiV1' 

const Patients = {

    state: () => {
        return {
            patients: {
                
            }
        }
    },
    mutations: {
        SET_PATIENTS(state, patients) {
          state.patients = patients
        }
    },
    actions: {
        fetchPatientsStats({ commit }) {
            api.getPatientsStats(2)
                .then(response => {
                    console.log('Howdy')
                    commit('SET_PATIENTS', response.data)
                })
        }
    },
    getters: {
        allPatients: (state) => state.patients
    }
}

export default Patients;
