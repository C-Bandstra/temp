<template>
  <div id="navbar" class="navbar">
    <img class="logo" src="../assets/aetheria-logo.svg">
    <p> {{ }} </p>
    <section class="btn-container">
      <button  @click="active = 1" :class="{active:active == 1}" class="btn">
        DASHBOARD
        <img class="icon dashboard" src="../assets/dashboard.svg">
      </button>
      <button @click="active = 2" :class="{active:active == 2}" >
        TOOL LIBRARY
        <img class="icon tool-library" src="../assets/tool-library.svg">
      </button>
      <button @click="active = 3" :class="{active:active == 3}" >
        PATIENTS
        <img class="icon patients" src="../assets/patients.svg">
      </button>
    </section>
    <section class="btn-container-2">
      <button @click="active = 4" :class="{active:active == 4}" >
        HELP CENTER
        <img class="icon help-center" src="../assets/help-center.svg">
      </button>
      <button @click="active = 5" :class="{active:active == 5}" >
        SETTINGS
        <img class="icon settings" src="../assets/settings.svg">
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      active: undefined
    };
  },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  width: 18%;
  height: 100%;
  background-color: #FFFFFF;
  margin:0;
  justify-self: flex-start;
}

.btn-container,
.btn-container-2 {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%
}

.btn-container-2 {
  margin-top: 40%;
}

button {
  width: 80%;
  height: 13%;
  display: flex;
  align-items: center;
  border: none;
  margin-bottom: 5%;
  border-radius: 30px;
  background: rgba(196, 196, 196, 0.25);
  padding: 6%;
  position: relative;
  margin: 2%;
  font-weight: 500;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  outline: none;
}

.active {
  background: linear-gradient(92.91deg, #86A1BD 6.41%, #B9B8C3 52.63%, #FAC391 94.27%);
}

.logo {
  margin: 8%;
  margin-bottom: 0%;
  width: 40%;
}

.icon {
  margin-left: auto;
}

.messaging {
  margin-right: 4%;
}

</style>
