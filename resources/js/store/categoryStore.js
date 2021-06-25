import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import AppStorage from '../Helpers/AppStorage';
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
            return axios.get(RESOURCE_CATEGORY, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH', response.data))
            .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_CATEGORY}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH_ONE', response.data))
            .catch();
        },
        addCategory({}, category) {
            return axios.post(`${RESOURCE_CATEGORY}`, {
                category_name: category.category_name
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        editCategory({}, category) {
            return axios.put(`${RESOURCE_CATEGORY}/${category.id}`, {
                category_name: category.category_name
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        deleteCategory({}, id) {
            axios.delete(`${RESOURCE_CATEGORY}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(() => this.dispatch('category/fetch'))
            .catch();
        },
    }
};

export default CategoryStore;
