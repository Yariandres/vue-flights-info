<script setup lang="ts">
import { ref } from 'vue';
import BaseSelect from '../BaseSelect.vue';
import FlightsList from '../FlightsList.vue';
import { useFlightsStore } from '../../store/flights';
import { storeToRefs } from 'pinia';

const store = useFlightsStore();
store.getFlights();

const { isLoading } = storeToRefs(store);
const selected = ref<string>('');
</script>
<template>
  <main class="container">
    <div v-if="isLoading">Loading flights...</div>
    <section class="flex-col gap-16">
      <base-select v-model="selected" :label="'Sort by'" />
      <h1 class="text-ligth text-gray">
        Showing
        <span class="text-dark"
          >{{
            store.filterFlights(selected).length
              ? ` ${store.filterFlights(selected).length}`
              : 'No flights found'
          }}
        </span>
        flights
      </h1>
      <div class="flex-col gap-10">
        <flights-list
          v-for="flight in store.filterFlights(selected)"
          :key="flight.uuid"
          :flight="flight"
        />
      </div>
    </section>
  </main>
</template>
