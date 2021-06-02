import Vue from "vue";
import Vuex from "vuex";
import axios from "../plugins/axios";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {
        async getInvoices() {
            let res = await axios({
                url: `/invoices/`,
                method: "GET",
            });
            return res;
        },
    },
});
export default store;