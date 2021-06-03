<template>
  <section class="new-invoices">
    <h1>Bienvenue sur Compt'App</h1>
    <h4>Ajouter une facture</h4>
  

    <form name="form" class="form-control" @submit.prevent="handleNewInvoice(), ActiveModal()" method="POST">
        <input class="new-invoices__input" type="text" placeholder="Facture n°" v-model="number">
        <input class="new-invoices__input" type="text" placeholder="Nom" v-model="name">
        <input class="new-invoices__input" type="text" placeholder="Montant" v-model="amount">
        <input class="new-invoices__input" type="text" placeholder="Type : débit/crédit" v-model="type">
        <input class="new-invoices__input" type="text" placeholder="Date" v-model="date">

        <button class="btn btn-secondary btn-block m-2">Ajouter</button>


    </form>

    <div v-if="isModal" class="alert alert-success">
        {{ notifSubmit }}
    </div>

  </section>
</template>

<script>

import axios from "axios";

  export default {
    data() {
      return {
        number: "",
        name: "",
        amount:"",
        type: "",
        date: "",
        isModal: false,
        notifSubmit: "Votre facture à été ajoutée."
      };
    },
    methods: {
        handleNewInvoice(){
            axios({
                method: 'post',
                url: "http://localhost:8000/api/invoices/",
                data: {
                    number: this.number,
                    name: this.name,
                    amount: this.amount,
                    type: this.type,
                    date: this.date
                }
            })
        },

        removeModal(){
            this.isModal= false 
        },

        ActiveModal(){
            this.isModal = true
            setTimeout(this.removeModal,4000)
        },
    },

  };
</script>

<style>
  .invoices__div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>