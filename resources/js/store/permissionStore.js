import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import AppStorage from '../Helpers/AppStorage';
import {RESOURCE_PERMISSION} from '../api/api';

Vue.use(Vuex);

const PermissionStore = {
    namespaced: true,
    state: {
        permissions: [],
        permission: {}
    },
    mutations: {
        FETCH(state, permissions) {
            state.permissions = permissions;
        },
        FETCH_ONE(state, permission) {
            state.permission = permission;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_PERMISSION, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH', response.data))
            .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_PERMISSION}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH_ONE', response.data))
            .catch();
        },
        addPermission({}, permission) {
            return axios.post(`${RESOURCE_PERMISSION}`, {
                name: permission.name
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        editPermission({}, permission) {
            return axios.put(`${RESOURCE_PERMISSION}/${permission.id}`, {
                name: permission.name
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        deletePermission({}, id) {
            axios.delete(`${RESOURCE_PERMISSION}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(() => this.dispatch('permission/fetch'))
            .catch();
        },
    }
};

export default PermissionStore;
