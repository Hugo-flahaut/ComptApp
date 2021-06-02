<template>
  <section class="home">
    <h1>Bienvenue sur Compt'App</h1>
    <h4> Vos factures </h4>
  
    <Balance />

  </section>
</template>

<script>
  import { mapActions, mapState } from "vuex";
  import Balance from "../components/Balance";

  export default {
    data() {
      return {
        invoices: "",
      };
    },
    components: {
      Balance,
    },
    computed: {
      ...mapState([""]),
    },
    mounted() {
      this.getInvoices();
    },
    methods: {
      ...mapActions(["getInvoices"]),
      async getInvoices() {
        let { data } = await this.getInvoices();
        this.invoices = data.invoices;
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