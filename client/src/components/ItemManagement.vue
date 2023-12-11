<template>
  <div>
    <h1>Item Store</h1>
    <AddItemForm @item-added="fetchItems" />
    <ItemList :items="items" @item-deleted="fetchItems" />
  </div>
</template>

<script>
import axios from 'axios';
import AddItemForm from './AddItemForm.vue';
import ItemList from './ItemList.vue';

export default {
  components: {
    AddItemForm,
    ItemList
  },
  data() {
    return {
      items: [] // This array will hold the items fetched from the server
    };
  },
  methods: {
    fetchItems() {
      // Fetch the items from the server
      axios.get('https://urban-robot-57xg7qjv5wvfppv7-8000.app.github.dev/api/items')
        .then(response => {
          // Ensure the response is an array of items
          if (Array.isArray(response.data)) {
            // Update the items data property with the response data
            this.items = response.data;
          } else {
            // Handle the case where response is not as expected
            console.error('Response format is incorrect:', response.data);
          }
        })
        .catch(error => {
          // Log an error if there's a problem fetching the items
          console.error('There was an error fetching the items:', error);
        });
    }
  },
  mounted() {
    // Fetch items when the component is mounted
    this.fetchItems();
  },
};
</script>

<!-- Add any additional styles if necessary -->
<style>
/* Your styles here */
</style>



  
  
  


  
  
  