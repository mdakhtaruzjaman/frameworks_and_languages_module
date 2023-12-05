<template>
  <div>
    <h1>Items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.content }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ItemsList',
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchItems() {
      axios.get('/api/items') // Ensure this matches your server's endpoint
        .then(response => {
          this.items = response.data;
        })
        .catch(error => {
          console.error('There was an error fetching the items:', error);
        });
    }
  },
  mounted() {
    this.fetchItems();
  },
};
</script>
