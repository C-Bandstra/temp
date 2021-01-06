import api from '../../apiV1' 

const Patients = {

    state: () => {
        return {
            patients: {
                "therapist_id": 2,
                "patients": [
                    {
                        "patient_name": "Robert Davis",
                        "patient_id": 1,
                        "intake_date": "12/18/2020",
                        "coping_stat": 1.21,
                        "severity_stat": 7.83,
                        "median_health_stat": 4.8
                    },
                    {
                        "patient_name": "Cindy Castillo",
                        "patient_id": 2,
                        "intake_date": "12/18/2020",
                        "coping_stat": 1.83,
                        "severity_stat": 7.15,
                        "median_health_stat": 5.03
                    },
                    {
                        "patient_name": "Timothy Castillo",
                        "patient_id": 3,
                        "intake_date": "12/18/2020",
                        "coping_stat": 6.04,
                        "severity_stat": 1.79,
                        "median_health_stat": 5.23
                    },
                    {
                        "patient_name": "Allison Evans",
                        "patient_id": 4,
                        "intake_date": "12/18/2020",
                        "coping_stat": 9.2,
                        "severity_stat": 1.94,
                        "median_health_stat": 8.16
                    }
                ]
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
