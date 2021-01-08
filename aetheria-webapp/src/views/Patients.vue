<template>
  <div id='patients' class="patients">
    <header>
      <h1>PATIENTS</h1>
      <section class="search-bar">
        <input/>
        <img class="search-icon" src="../assets/search.svg"/>
      </section>
      <button class="filter-btn">
        <img src="../assets/filter.svg"/>
      </button>
    </header>
    <p class="filter-status">Filtered by {{ filterType }}</p>
    <section class="patients-container">

      <PatientCard v-for="patient in patients.patients" :key="patient.patient_id" :patient="patient"/>

    </section>
    <button class="new-patient-btn">
      ADD NEW PATIENT
      <img class="right-arrow" src="../assets/right-arrow.svg">
    </button>
  </div>
</template>

<script>

import PatientCard from '../components/patients/PatientCard'

export default {
  name: 'Patients',
  components: {
    PatientCard
  },
  data() {
    return {
      filterType: 'A-Z'
    };
  },
  computed: {
    gettersPatients() {
      return this.$store.getters.allPatientsIDs
    },
    patients() {
      return this.$store.state.patients
    }
  },
  mounted() {
    this.$store.dispatch('fetchPatientsStats')
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #patients {
    display: flex;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    height: 100%;
    width: 100%;
    padding: 2%;
  }

  header {
    display: flex;
    justify-self: flex-start;
    margin-top: 1%;
    align-items: center;
    height: 5.5%;
    width: 100%;
  }
  
  h1 {
    font-weight: 500;
    font-size: 1.2em;
  }

  input {
    border: none;
    border-radius: 30px;
    outline: none;
    font-size: 100%;
    width: 80%;
    padding-left: 5%;
  }

  .search-bar {
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin-left: 54%;
    width: 30%;
    height: 80%;
    border-radius: 30px;
    border: 2px solid rgba(0, 0, 0, 0.15);
  }

  .search-icon {
    margin-right: 2%;
  }

  .filter-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4%;
    height: 90%;
    border-radius: 50%;
    background-color: white;
    border: 2px solid rgba(0, 0, 0, 0.15);
    margin-left: 2%;
  }

  .filter-status {
    text-align: left;
    font-weight: 300;
    margin-top: 2%;
  }

  .patients-container {
    width: 100%;
    height: 65%;
  }

  .patient-card {
    width: 100%;
    height: 13%;
    display: flex;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: white;
  }

  .new-patient-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24%;
    height: 7%;
    color: white;
    background: linear-gradient(92.91deg, #86A1BD 6.41%, #B9B8C3 52.63%, #FAC391 94.27%);
    margin: 2%;
    margin-left: auto;
    padding: 2%;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    outline: none;
    border: none;
    border-radius: 48px;
  }

  .right-arrow {
    width: 6%;

  }

</style>
