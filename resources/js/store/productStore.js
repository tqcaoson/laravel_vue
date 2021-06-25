import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import AppStorage from '../Helpers/AppStorage';
import {RESOURCE_PRODUCT} from '../api/api';

Vue.use(Vuex);

const ProductStore = {
    namespaced: true,
    state: {
        products: [],
        product: {}
    },
    mutations: {
        FETCH(state, products) {
            state.products = products;
        },
        FETCH_ONE(state, product) {
            state.product = product;
        },
    },
    actions: {
        fetch({ commit }) {
            return axios.get(RESOURCE_PRODUCT, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH', response.data))
            .catch();
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_PRODUCT}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(response => commit('FETCH_ONE', response.data))
            .catch();
        },
        addProduct({}, product) {
            return axios.post(`${RESOURCE_PRODUCT}`, {
                product_name: product.product_name,
                product_code: product.product_code,
                category_id: product.category_id,
                supplier_id: product.supplier_id,
                root: product.root,
                buying_price: product.buying_price,
                selling_price: product.selling_price,
                buying_date: product.buying_date,
                image: product.image,
                product_quantity: product.product_quantity
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        editProduct({}, product) {
            return axios.put(`${RESOURCE_PRODUCT}/${product.id}`, {
                product_name: product.product_name,
                product_code: product.product_code,
                category_id: product.category_id,
                supplier_id: product.supplier_id,
                root: product.root,
                buying_price: product.buying_price,
                selling_price: product.selling_price,
                buying_date: product.buying_date,
                image: product.image,
                product_quantity: product.product_quantity
            }, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then();
        },
        deleteProduct({}, id) {
            axios.delete(`${RESOURCE_PRODUCT}/${id}`, {
                headers: {
                    Authorization: 'Bearer ' + AppStorage.getToken()
                }
            })
            .then(() => this.dispatch('product/fetch'))
            .catch();
        },
    }
};

export default ProductStore;
