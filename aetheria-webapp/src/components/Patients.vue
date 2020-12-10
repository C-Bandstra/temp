<template>
  <div id='patients' class="patients">
    <header>
      <h1>PATIENTS</h1>
      <section class="search-bar">
        <input/>
          <img src="../assets/search.svg"/>
        
      </section>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #patients {
    font-family: 'Montserrat', sans-serif;
  }
  
  h1 {
    font-weight: 300;
  }

  .search-bar {
    display: flex;
  }

</style>
