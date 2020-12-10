<template>
  <NavBar/>
  <Patients/>
</template>

<script>

import NavBar from './components/NavBar.vue'
import Patients from './components/Patients.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Patients
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  background-color: #F6F6F6;
  display: flex;
  justify-content: flex-start;
}
</style>
