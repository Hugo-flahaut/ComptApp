<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <h1>Bienvenue sur votre application</h1>
        <div class="col-3">
          <Navbar />
        </div>
        <div class="col-9">
            <h2>Solde</h2>
            <h2>Débit</h2>
            <h3>Crédit</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'

    export default {
    name: 'Home',
    components: {
        Navbar
    }
    }
</script>

<style>

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background: #ececec;
        margin-top: 60px;
    }

</style>