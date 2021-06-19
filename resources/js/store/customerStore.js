import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {RESOURCE_CUSTOMER} from '../api/api';

Vue.use(Vuex);

const CustomerStore = {
    namespaced: true,
    state: {
        customers: [],
        customer: {}
    },
    mutations: {
        FETCH(state, customers) {
            state.customers = customers;
        },
        FETCH_ONE(state, customer) {
            state.customer = customer;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_CUSTOMER)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_CUSTOMER}/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        addCustomer({}, customer) {
            return axios.post(`${RESOURCE_CUSTOMER}`, {
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address,
                photo: customer.photo,
                newphoto: customer.newphoto
            })
            .then();
        },
        editCustomer({}, customer) {
            return axios.put(`${RESOURCE_CUSTOMER}/${customer.id}`, {
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address,
                photo: customer.photo,
                newphoto: customer.newphoto
            })
            .then();
        },
        deleteCustomer({}, id) {
            axios.delete(`${RESOURCE_CUSTOMER}/${id}`)
                .then(() => this.dispatch('customer/fetch'))
                .catch();
        },
    }
};

export default CustomerStore;
