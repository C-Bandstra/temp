<template>
  <div class="patient-slot coping-quickview">
    <button class="quickview-btn">
      {{ title }}
    </button>
    <p class="patient-stat">{{ stat }}</p>     
  </div>
</template>

<script>
export default {
  name: "PatientSlot",
  props: {
    title: String,
    stat: [String, Number]
  }
}
</script>

<style>
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
