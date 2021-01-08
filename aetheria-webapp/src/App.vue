<template>
  <div class="component-container">
    <router-view />
  </div>
</template>



<script>



// import NavBar from './components/NavBar.vue'
// import Patients from './views/Patients.vue'
// import Login from './components/login/Login'
// <NavBar/>
// <Patients/>
export default {
  name: 'App',
  components: {
    // Patients,
    // NavBar
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

.component-container {
  display: flex;
  height: 100%;
  width: 100%;
}

#blockColorblindContent {
  display: none;
}

#colorBlindSVG {
  display: none;
}




</style>
