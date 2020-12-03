<template>
  <div id='navbar' class="navbar">
    <img class="logo" src="../assets/aetheria-logo.svg">
    <section class="btn-container">
      <button class="btn">
        DASHBOARD
        <img class="icon dashboard" src="../assets/dashboard.svg">
      </button>
      <button class="btn">
        TOOL LIBRARY
        <img class="icon tool-library" src="../assets/tool-library.svg">
      </button>
      <button class="btn">
        MESSAGING
        <img class="icon messaging" src="../assets/messaging.svg">
      </button>
      <button class="btn">
        PATIENTS
        <img class="icon patients" src="../assets/patients.svg">
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#navbar {
  width: 18%;
  height: 100%;
  background-color: #FFFFFF;
  /* width: 960px; */
  position: relative;
  margin:0 auto;
  /* line-height: 1.4em; */
}

.btn-container {
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%
}

.btn {
  width: 82%;
  height: 13%;
  display: flex;
  align-items: center;
  border: none;
  margin-bottom: 5%;
  border-radius: 30px;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  background: rgba(196, 196, 196, 0.25);
  padding: 6%;
  position: relative;
  margin: 3%;
  font-weight: 500;

  /* background: linear-gradient(92.91deg, #86A1BD 6.41%, #B9B8C3 52.63%, #FAC391 94.27%); */
}

.logo {
  margin: 10%;
}

.icon {
  margin-left: auto;
}

.messaging {
  margin-right: 4%;
}

#container2 {

}

/* If in mobile screen with maximum width 479px. The iPhone screen resolution is 320x480 px (except iPhone4, 640x960) */    
@media only screen and (max-width: 479px){
    #container2 { width: 90%; }
}



</style>
