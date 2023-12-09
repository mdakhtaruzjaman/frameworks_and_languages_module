<!--AddItemForm.vue-->
<template>
  <div class="item-form container">
    <h2>Add New Item</h2>
    <form @submit.prevent="submitForm">
      <!-- Form fields with v-model bindings -->
      <div class="form-group row">
        <label for="userId" class="col-sm-2 col-form-label">User ID:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="userId" v-model="newItem.userId" required>
          <small id="userIdHelp" class="form-text text-muted">User ID must be unique.</small>
        </div>
      </div>
      <div class="form-group row">
        <label for="keywords" class="col-sm-2 col-form-label">Keywords:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="keywords" v-model="newItem.keywords" required>
          <small id="keywordsHelp" class="form-text text-muted">Keywords to describe the item.</small>
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 col-form-label">Description:</label>
        <div class="col-sm-10">
          <textarea class="form-control" id="description" v-model="newItem.description" required></textarea>
          <small id="descriptionHelp" class="form-text text-muted">A detailed description of the item.</small>
        </div>
      </div>
      <div class="form-group row">
        <label for="imageUrl" class="col-sm-2 col-form-label">Image URL:</label>
        <div class="col-sm-10">
          <input type="url" class="form-control" id="imageUrl" v-model="newItem.imageUrl">
          <small id="imageUrlHelp" class="form-text text-muted">URL of the item image.</small>
        </div>
      </div>
      <div class="form-group row">
        <label for="latitude" class="col-sm-2 col-form-label">Latitude:</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="latitude" v-model.number="newItem.latitude" required>
          <small id="latitudeHelp" class="form-text text-muted">Geographical latitude.</small>
        </div>
      </div>
      <div class="form-group row">
        <label for="longitude" class="col-sm-2 col-form-label">Longitude:</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="longitude" v-model.number="newItem.longitude" required>
          <small id="longitudeHelp" class="form-text text-muted">Geographical longitude.</small>
        </div>
      </div>
      <!-- Submit and Reset buttons -->
      <div class="form-group row">
        <div class="col-sm-10 offset-sm-2">
          <button type="submit" class="btn btn-primary">Add</button>
          <button type="button" class="btn btn-secondary" @click="resetForm">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newItem: {
        userId: '',
        keywords: '',
        description: '',
        imageUrl: '',
        latitude: null,
        longitude: null,
      },
    };
  },
  methods: {
    submitForm() {
      axios.post('https://fuzzy-tribble-7jpvj9676qqfx96p-3000.app.github.dev/api/items', this.newItem)
        .then(response => {
          // Emit an event to inform the parent component to refresh the list
          this.$emit('item-added', response.data);
          // Reset the form fields after successful submission
          this.resetForm();
        })
        .catch(error => {
          console.error('There was an error adding the item:', error);
        });
    },
    resetForm() {
      // Reset the newItem object to clear the form fields
      this.newItem = {
        userId: '',
        keywords: '',
        description: '',
        imageUrl: '',
        latitude: null,
        longitude: null,
      };
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin-top: 20px;
}
.row {
  margin-bottom: 10px;
}
.col-form-label {
  text-align: right;
}
.form-control {
  max-width: 300px;
}
.form-text {
  display: block;
  margin-top: 5px;
}
.btn-secondary {
  margin-left: 10px;
}
</style>


