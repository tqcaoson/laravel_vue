import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {RESOURCE_CATEGORY} from '../api/api';

Vue.use(Vuex);

const CategoryStore = {
    namespaced: true,
    state: {
        categorys: [],
        category: {}
    },
    mutations: {
        FETCH(state, categorys) {
            state.categorys = categorys;
        },
        FETCH_ONE(state, category) {
            state.category = category;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_CATEGORY)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_CATEGORY}/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        addCategory({}, category) {
            return axios.post(`${RESOURCE_CATEGORY}`, {
                category_name: category.category_name
            })
            .then();
        },
        editCategory({}, category) {
            return axios.put(`${RESOURCE_CATEGORY}/${category.id}`, {
                category_name: category.category_name
            })
            .then();
        },
        deleteCategory({}, id) {
            axios.delete(`${RESOURCE_CATEGORY}/${id}`)
                .then(() => this.dispatch('category/fetch'))
                .catch();
        },
    }
};

export default CategoryStore;
