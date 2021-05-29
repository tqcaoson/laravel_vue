import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {RESOURCE_SUPPLIER} from '../api/api';

Vue.use(Vuex);

const SupplierStore = {
    namespaced: true,
    state: {
        suppliers: [],
        supplier: {}
    },
    mutations: {
        FETCH(state, suppliers) {
            state.suppliers = suppliers;
        },
        FETCH_ONE(state, supplier) {
            state.supplier = supplier;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_SUPPLIER)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_SUPPLIER}/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        addSupplier({}, supplier) {
            axios.post(`${RESOURCE_SUPPLIER}`, {
                name: supplier.name,
                email: supplier.email,
                phone: supplier.phone,
                shopname: supplier.shopname,
                address: supplier.address,
                photo: supplier.photo
            })
            .then(error =>this.errors = error.response.data.errors);
        },
        editSupplier({}, supplier) {
            axios.put(`${RESOURCE_SUPPLIER}/${supplier.id}`, {
                name: supplier.name,
                email: supplier.email,
                phone: supplier.phone,
                shopname: supplier.shopname,
                address: supplier.address,
                photo: supplier.photo
            })
            .then();
        },
        deleteSupplier({}, id) {
            axios.delete(`${RESOURCE_SUPPLIER}/${id}`)
                .then(() => this.dispatch('supplier/fetch'))
                .catch();
        },
    }
};

export default SupplierStore;
