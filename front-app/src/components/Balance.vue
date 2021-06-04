<template>
  <section class="balance mx-auto">
    <div class="balance__section mx-auto">

        <h3>Crédit</h3>
        <p>{{ credit }} €</p>

        <h3>Débit</h3>
        <p>{{ debit }}€</p>

        <h3>Solde</h3>
        <p>€</p>
    </div>

  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Balance",
    data: () => {
      return {
        debit: [],
        credit: []
      }
    },
    methods:{
      async getBalance(){
        axios
          .get('http://localhost:8000/api/balance/')
          .then(response => {
            this.credit = response.data.data[0].allcredit,
            this.debit = response.data.data[1].alldebit
          })
      }
    }, 
    mounted(){
      this.getBalance();
    }
  };
</script>

<style>
  .balance {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 550px;
    box-shadow: 2px 1px 7px 1px #eee;
    padding: 20px 5px;
    box-sizing: border-box;
    margin: 15px 5px;
    border-radius: 4px;
  }
  .balance__section {
    width: 100%;
    max-width: 350px;
    margin-right: 5px;
  }
  .balance__title {
    font-size: 15px;
    text-align: left;
    margin-top: 0;
  }
  .balance__author {
    font-size: 14px;
    text-align: left;
    font-weight: normal;
  }
  .article__published {
    text-align: left;
  }
  .image__container {
    width: 100%;
    max-width: 180px;
    max-height: 180px;
  }
  .balance__img {
    transition: max-width 300ms cubic-bezier(0.4, 0, 1, 1),
    max-height 300ms cubic-bezier(0.4, 0, 1, 1);
    max-width: 150px;
    max-height: 150px;
  }
  .balance__img:hover {
    max-width: 180px;
    max-height: 180px;
  }
  .article__link {
    text-decoration: none;
    color: inherit;
  }
</style>