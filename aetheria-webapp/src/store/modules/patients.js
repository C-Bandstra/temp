import api from "../../apiV1" 

const Patients = {

    state: () => {
        return {
            patients: []
        }
    },
    mutations: {
        SET_PATIENTS(state, patients) {
          state.patients = patients
          console.log(state, "in mutation")
        }
    },
    actions: {
        fetchPatientsStats({ commit }) {
            api.getPatientsStats(2)
                .then(response => {
                    commit('SET_PATIENTS', response.data)
                })
        }
    },
    getters: {
        allPatientsIDs: (state) => state.patients.map(patient => {
            return patient.id
        })
    }
}

export default Patients;
