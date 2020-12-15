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
      <section class="patient-card">
        <div class="patient-slot patient-name">
          <p>Amanda K. Southworth</p>   
        </div>
        <div class="patient-slot intake-quickview">
          <button class="quickview-btn">
            INTAKE
          </button>
          <p class="patient-stat">11 / 15 / 2001</p>   
        </div>
        <div class="patient-slot coping-quickview">
          <button class="quickview-btn">
            COPING
          </button>
          <p class="patient-stat">4 / 10</p>     
        </div>
        <div class="patient-slot severity-quickview">
          <button class="quickview-btn">
            SEVERITY
          </button>
          <p class="patient-stat">9 / 10</p>     
        </div>
        <div class="patient-slot health-quickview">
          <button class="quickview-btn">
            HEALTH
          </button>
          <p class="patient-stat">6.67 / 10</p>               
        </div>
      </section>
    </section>
    <button class="new-patient-btn">
      ADD NEW PATIENT
      <img class="right-arrow" src="../assets/right-arrow.svg">
    </button>
  </div>
</template>

<script>
export default {
  name: 'Patients',
  data() {
    return {
      filterType: 'A-Z'
    };
  },
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

  .patient-slot {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    border-left: 1px solid lightgrey;
  }

  .patient-name {
    border-left: none;
  }

  .patient-stat {
    font-weight: 300;
  }

  .quickview-btn {
    width: 33%;
    height: 45%;
    color: white;
    border-radius: 19px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    background-color: #545454;
    font-size: 10px;
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
