import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {RESOURCE_USER} from '../api/api';

Vue.use(Vuex);

const UserStore = {
    namespaced: true,
    state: {
        users: [],
        hasPermissions: [],
        user: {}
    },
    mutations: {
        FETCH(state, users) {
            state.users = users;
        },
        FETCH_ONE(state, user) {
            state.user = user;
        },
        FETCH_HAS_ROLE(state, hasPermissions) {
            state.hasPermissions = hasPermissions;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_USER)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_USER}/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        fetchHasRole({ commit }, id) {
            return axios.get(`api/has/${id}`)
                .then(response => commit('FETCH_HAS_ROLE', response.data))
                .catch();
        },
        addUser({}, user) {
            axios.post(`${RESOURCE_USER}`, {
                name: user.name,
                email: user.email,
                password: user.password,
                confirm_password: user.confirm_password,
                roles: user.roles
            })
            .then();
        },
        editUser({}, user) {
            axios.put(`${RESOURCE_USER}/${user.id}`, {
                name: user.name,
                email: user.email,
                password: user.password,
                confirm_password: user.confirm_password,
                roles: user.roles
            })
            .then();
        },
        deleteUser({}, id) {
            axios.delete(`${RESOURCE_USER}/${id}`)
                .then(() => this.dispatch('user/fetch'))
                .catch();
        },
    }
};

export default UserStore;
