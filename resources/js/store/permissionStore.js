import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
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
            return axios.get(RESOURCE_PERMISSION)
                .then(response => commit('FETCH', response.data))
                .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_PERMISSION}/${id}`)
                .then(response => commit('FETCH_ONE', response.data))
                .catch();
        },
        addPermission({}, permission) {
            axios.post(`${RESOURCE_PERMISSION}`, {
                name: permission.name
            })
            .then();
        },
        editPermission({}, permission) {
            axios.put(`${RESOURCE_PERMISSION}/${permission.id}`, {
                name: permission.name
            })
            .then();
        },
        deletePermission({}, id) {
            axios.delete(`${RESOURCE_PERMISSION}/${id}`)
                .then(() => this.dispatch('permission/fetch'))
                .catch();
        },
    }
};

export default PermissionStore;
