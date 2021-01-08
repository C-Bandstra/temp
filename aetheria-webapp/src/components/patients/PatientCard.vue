<template>
    <section class="patient-card">

        <div class="patient-slot patient-name">
            <p>{{ patient.patient_name }}</p>   
        </div>

        <PatientSlot title="INTAKE" :stat="patient.intake_date"/>
        <PatientSlot title="COPING" :stat="`${patient.coping_stat} / 10`"/>
        <PatientSlot title="SEVERITY" :stat="`${patient.severity_stat} / 10`"/>
        <PatientSlot title="HEALTH" :stat="`${patient.median_health_stat} / 10`"/>
        
    </section>
</template>

<script>
import PatientSlot from './PatientSlot'

export default {
    name: 'PatientCard',
    components: {
      PatientSlot
    },
    props: {
        patient: Object
    }
}
</script>

<style scoped>
  .patient-card {
    width: 100%;
    height: 13%;
    display: flex;
    border: 1px solid lightgrey;
    border-radius: 5px;
    background-color: white;
    margin: 0.5%;
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
</style>
