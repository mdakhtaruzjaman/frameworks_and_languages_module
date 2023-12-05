import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    items: []
  },
  mutations: {
    setItems(state, items) {
      state.items = items;
    }
  },
  actions: {
    fetchItems({ commit }) {
      // Make the API call using Axios
      axios.get('/api/items')
        .then(response => {
          commit('setItems', response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the items:', error);
        });
    }
  }
});

export default store;
