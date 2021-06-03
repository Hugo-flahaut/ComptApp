import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        invoices: [],
        listinvoices: []
    },
    // getters: {},
    mutations: {
        setInvoices(state,invoices){
            state.invoices.push(invoices)
        }
    },
    actions: {
        getInvoices(context) {
            axios
                .get(`http://localhost:8000/api/invoices/`)
                .then(({data})  => {
                    context.commit('Invoices', { 
                        name: data.name,
                        number: data.number,
                        type: data.type,
                        date: data.date,
                        createdAt: data.createdAt,
                        id: data.id,
                    })
                })
                .catch(error => {
                console.error('error', error)
                });
        },
    },
});
export default store;