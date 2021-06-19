import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {RESOURCE_EXPENSE} from '../api/api';

Vue.use(Vuex);

const ExpenseStore = {
    namespaced: true,
    state: {
        expenses: [],
        expense: {}
    },
    mutations: {
        FETCH(state, expenses) {
            state.expenses = expenses;
        },
        FETCH_ONE(state, expense) {
            state.expense = expense;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_EXPENSE)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_EXPENSE}/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        addExpense({}, expense) {
            return axios.post(`${RESOURCE_EXPENSE}`, {
                details: expense.details,
                amount: expense.amount
            })
            .then();
        },
        editExpense({}, expense) {
            return axios.put(`${RESOURCE_EXPENSE}/${expense.id}`, {
                details: expense.details,
                amount: expense.amount
            })
            .then();
        },
        deleteExpense({}, id) {
            axios.delete(`${RESOURCE_EXPENSE}/${id}`)
                .then(() => this.dispatch('expense/fetch'))
                .catch();
        },
    }
};

export default ExpenseStore;
