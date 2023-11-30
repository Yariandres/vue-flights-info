<script setup lang="ts">
import { computed, ref } from 'vue';
import BaseSelect from '../BaseSelect.vue';
import FlightsList from '../FlightsList.vue';
import { useFlightsStore } from '../../store/flights';
import { storeToRefs } from 'pinia';

const store = useFlightsStore();
store.getFlights();

const { flights, isLoading } = storeToRefs(store);
const selected = ref<string>('');

const filterFlights = computed(() => {
  return flights.value.filter((flight) => {
    if (selected.value === 'origin') {
      return flight.origin === 'MAD';
    } else if (selected.value === 'destination') {
      return flight.destination === 'MAD';
    } else {
      return flight;
    }
  });
});
</script>
<template>
  <main class="container">
    <div v-if="isLoading">Loading flights...</div>
    <section class="flex-col gap-16">
      <base-select v-model="selected" :label="'Sort by'" />
      <h1 class="text-ligth text-gray">
        Flight results from:
        <span class="text-dark">MAD</span> to:
        <span class="text-dark">LON</span>
      </h1>
      <div class="flex-col gap-10">
        <flights-list
          v-for="flight in filterFlights"
          :key="flight.uuid"
          :flight="flight"
        />
      </div>
    </section>
  </main>
</template>
