<template>
  <div id='navbar' class="navbar">
    <img class="logo" src="../assets/aetheria-logo.svg">
    <section class="btn-container">
      <button class="btn">
        DASHBOARD
        <img class="icon dashboard" src="../assets/dashboard.svg">
      </button>
      <button>
        TOOL LIBRARY
        <img class="icon tool-library" src="../assets/tool-library.svg">
      </button>
      <button>
        MESSAGING
        <img class="icon messaging" src="../assets/messaging.svg">
      </button>
      <button>
        PATIENTS
        <img class="icon patients" src="../assets/patients.svg">
      </button>
    </section>
    <section class="btn-container-2">
      <button>
        HELP CENTER
        <img class="icon help-center" src="../assets/help-center.svg">
      </button>
      <button>
        SETTINGS
        <img class="icon settings" src="../assets/settings.svg">
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  width: 18%;
  height: 100%;
  background-color: #FFFFFF;
  position: relative;
  margin:0 auto;
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
  margin-top: 35%;
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
  margin: 3%;
  font-weight: 500;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
}

.logo {
  margin: 8%;
  width: 30%;
}

.icon {
  margin-left: auto;
}

.messaging {
  margin-right: 4%;
}

</style>
