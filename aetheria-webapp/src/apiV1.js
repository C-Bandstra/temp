import axios from 'axios'

const connection = axios.create({
  baseURL: 'https://aetheria-backend-temp.herokuapp.com/api/v1/'
})

export default {
  getPatientsStats: (id) =>
  connection.get(`therapists/${id}/patients_stats`),
}
