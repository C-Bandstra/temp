import api from "../../apiV1" 

const Patients = {

    state: () => {
        return {
            patientsStats: []
        }
    },
    mutations: {
        setPatientsStats: (state, patientsStats) => {
            state.patientsStats = patientsStats
        }
    },
    actions: {
        async fetchPatientsStats({ commit }) {
            const response = await api.getPatientsStats(2);
            let patients = response.data.patients
            commit('setPatientsStats', patients)
        }
    },
    getters: {
        getAllPatientsStats: state => state.patientsStats
    }
}

export default Patients;
