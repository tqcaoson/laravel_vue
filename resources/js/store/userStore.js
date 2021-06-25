import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import AppStorage from '../Helpers/AppStorage';
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
            return axios.get(RESOURCE_USER, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH', response.data))
            .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_USER}/${id}`,
            {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH_ONE', response.data))
            .catch();
        },
        fetchHasRole({ commit }, id) {
            return axios.get(`api/has/${id}`,
            {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH_HAS_ROLE', response.data))
            .catch();
        },
        addUser({}, user) {
            return axios.post(`${RESOURCE_USER}`, {
                name: user.name,
                email: user.email,
                password: user.password,
                confirm_password: user.confirm_password,
                roles: user.roles
            },
            {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then()
        },
        editUser({}, user) {
            return axios.put(`${RESOURCE_USER}/${user.id}`, {
                name: user.name,
                email: user.email,
                password: user.password,
                confirm_password: user.confirm_password,
                roles: user.roles
            },
            {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then()
        },
        deleteUser({}, id) {
            axios.delete(`${RESOURCE_USER}/${id}`,
            {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(() => this.dispatch('user/fetch'))
            .catch();
        },
    }
};

export default UserStore;
