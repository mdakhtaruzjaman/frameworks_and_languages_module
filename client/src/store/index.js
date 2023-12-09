// store/index.js
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state() {
    return {
      items: [],
    };
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
  },
  actions: {
    fetchItems({ commit }) {
      axios.get('/api/items')
        .then(response => {
          commit('SET_ITEMS', response.data);
        })
        .catch(error => console.error('There was an error fetching the items:', error));
    },
    addItem({ dispatch }, newItem) {
      axios.post('/api/items', newItem)
        .then(() => {
          dispatch('fetchItems');
        })
        .catch(error => console.error('There was an error adding the item:', error));
    },
   // deleteItem({ dispatch }, itemId) {
    //  axios.delete(`/api/items/${itemId}`)
     //   .then(() => {
     //     dispatch('fetchItems');
     //   })
      //  .catch(error => console.error('There was an error deleting the item:', error));
  //  },
    deleteItem({ commit }, itemId) {
      return axios.delete(`/api/items/${itemId}`)
        .then(() => {
          commit('DELETE_ITEM', itemId);
       })
        .catch(error => {
          console.error('There was an error deleting the item:', error);
          throw error; // Rethrow the error to handle it in the component
        });
    },
  },
});


