<template>
  <section class="invoices">
    <h1>Bienvenue sur Compt'App</h1>
    <h4>Vos factures</h4>
  
    <div class="invoices__div" v-if="invoices">
        <div class="card m-2 p-2" v-for="invoices in invoices.data" :key="invoices.id">
            <p>Facture n° : {{ invoices.number }}</p>
            <p>Nom : {{ invoices.name }}</p>
            <p>Somme : {{ invoices.amount }} €</p>
            <p>Type : {{ invoices.type }}</p>
            <p>Date : {{ invoices.date }}</p>
            <p>Créée le : {{ invoices.createdAt }}</p>
        </div>
    </div>
    
  </section>
</template> 

<script>
    const axios = require('axios')
  export default {

    data() {
      return {
        invoices: [],
      };
    },   
    methods: {
        async fetchInvoices (){
            axios 
                .get('http://localhost:8000/api/invoices/')
                .then(response => {
                    this.invoices = response.data                    
                })
                .catch(error => {
                    if (error) throw new Error(error)
                })
            }
        },

    mounted() {
      this.fetchInvoices();
    }

//   }
  };
</script>

<style>
  .invoices__div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>