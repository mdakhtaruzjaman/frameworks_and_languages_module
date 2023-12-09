<!-- ItemList.vue -->
<template>
  <div>
    <h1>Items</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <div>
          <strong>User ID:</strong> {{ item.userId }}
        </div>
        <div>
          <strong>Keywords:</strong> {{ item.keywords }}
        </div>
        <div>
          <strong>Description:</strong> {{ item.description }}
        </div>
        <div v-if="item.imageUrl">
          <strong>Image:</strong>
          <img :src="item.imageUrl" alt="Item Image" style="width: 100px; height: auto;" />
        </div>
        <div>
          <strong>Latitude:</strong> {{ item.latitude }}
        </div>
        <div>
          <strong>Longitude:</strong> {{ item.longitude }}
        </div>
        <button @click="deleteItem(item.id)" class="btn btn-danger">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    items: Array,
  },
  methods: {
    deleteItem(itemId) {
      axios.delete(`https://fuzzy-tribble-7jpvj9676qqfx96p-3000.app.github.dev/api/items/${itemId}`)
        .then(() => {
          // Emit an event to inform the parent component to refresh the list
          this.$emit('item-deleted');
        })
        .catch(error => {
          console.error('There was an error deleting the item:', error);
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  background-color: #f8f9fa;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #c82333;
}

img {
  max-width: 100%;
  height: auto;
}
</style>







