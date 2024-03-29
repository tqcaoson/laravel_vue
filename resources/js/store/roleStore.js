import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import AppStorage from '../Helpers/AppStorage';
import {RESOURCE_ROLE} from '../api/api';

Vue.use(Vuex);

const RoleStore = {
    namespaced: true,
    state: {
        roles: [],
        role: {}
    },
    mutations: {
        FETCH(state, roles) {
            state.roles = roles;
        },
        FETCH_ONE(state, role) {
            state.role = role;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_ROLE, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH', response.data))
            .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_ROLE}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH_ONE', response.data))
            .catch();
        },
        addRole({}, role) {
            return axios.post(`${RESOURCE_ROLE}`, {
                name: role.name,
                permission: role.permission
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        editRole({}, role) {
            return axios.put(`${RESOURCE_ROLE}/${role.id}`, {
                name: role.name,
                permission: role.permission
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        deleteRole({}, id) {
            axios.delete(`${RESOURCE_ROLE}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(() => this.dispatch('role/fetch'))
            .catch();
        },
    }
};

export default RoleStore;
