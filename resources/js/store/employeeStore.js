import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import AppStorage from '../Helpers/AppStorage';
import {RESOURCE_EMPLOYEE} from '../api/api';

Vue.use(Vuex);

const EmployeeStore = {
    namespaced: true,
    state: {
        employees: [],
        employee: {}
    },
    mutations: {
        FETCH(state, employees) {
            state.employees = employees;
        },
        FETCH_ONE(state, employee) {
            state.employee = employee;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_EMPLOYEE, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH', response.data))
            .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_EMPLOYEE}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH_ONE', response.data))
            .catch();
        },
        addEmployee({}, employee) {
            return axios.post(`${RESOURCE_EMPLOYEE}`, {
                name: employee.name,
                email: employee.email,
                phone: employee.phone,
                sallery: employee.sallery,
                address: employee.address,
                photo: employee.photo,
                nid: employee.nid,
                joining_date: employee.joining_date
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        editEmployee({}, employee) {
            return axios.put(`${RESOURCE_EMPLOYEE}/${employee.id}`, {
                name: employee.name,
                email: employee.email,
                phone: employee.phone,
                sallery: employee.sallery,
                address: employee.address,
                photo: employee.photo,
                nid: employee.nid,
                joining_date: employee.joining_date
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        deleteEmployee({}, id) {
            axios.delete(`${RESOURCE_EMPLOYEE}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(() => this.dispatch('employee/fetch'))
            .catch();
        },
    }
};

export default EmployeeStore;
