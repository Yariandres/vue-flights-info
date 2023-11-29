<script setup lang="ts">
defineProps<{
  modelValue: string;
  label: string;
}>();
</script>
<template>
  <div class="input-group mt-32">
    <div class="custom-filter box-shadow-md">
      <label v-if="label" for="select" class="label">
        <span class="display-sm">{{ label }}</span>
      </label>
      <select
        class="select"
        id="select"
        :value="modelValue"
        v-bind="{
          onChange: ($event) => $emit('update:modelValue', ($event.target as HTMLSelectElement).value),
        }"
      >
        <option disabled>Please select one</option>
        <option value="">All</option>
        <option value="destination">Destination</option>
        <option value="origin">Origin</option>
      </select>
    </div>
  </div>
</template>
