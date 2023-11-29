<script setup lang="ts">
import { ref } from 'vue';
const selected = ref<string[]>([]);
</script>
<template>
  <div class="input-group mt-32">
    <div class="custom-filter box-shadow-md">
      <label for="select" class="label">
        <span class="display-sm">Sort by</span>
      </label>
      <select class="select" id="select" v-model="selected">
        <option disabled>Please select one</option>
        <option value="dest">Destination</option>
        <option value="orig">Origin</option>
      </select>
    </div>
  </div>
</template>
