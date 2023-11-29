<script setup lang="ts">
import { ref } from 'vue';
import type { FlightsData } from '../../types';
import AppFilter from '../AppFilter.vue';
import FlightsList from '../FlightsList.vue';

const flights = ref<FlightsData[]>([
  {
    origin: 'BHX',
    destination: 'AGA',
    departureDate: '2024-01-01',
    returnDate: '2024-02-01',
    price: 147.99,
    uuid: '1',
  },
  {
    origin: 'LHR',
    destination: 'CDG',
    departureDate: '2024-03-01',
    returnDate: '2024-03-10',
    price: 199.99,
    uuid: '2',
  },
  {
    origin: 'JFK',
    destination: 'LAX',
    departureDate: '2024-04-01',
    returnDate: '2024-04-10',
    price: 299.99,
    uuid: '3',
  },
  {
    origin: 'SFO',
    destination: 'SEA',
    departureDate: '2024-05-01',
    returnDate: '2024-05-10',
    price: 249.99,
    uuid: '4',
  },
  {
    origin: 'MIA',
    destination: 'CUN',
    departureDate: '2024-06-01',
    returnDate: '2024-06-10',
    price: 179.99,
    uuid: '5',
  },
]);
</script>
<template>
  <main class="container">
    <section class="flex-col gap-16">
      <app-filter />
      <div class="flex-col gap-10">
        <flights-list
          v-for="flight in flights"
          :key="flight.uuid"
          :flight="flight"
        />
      </div>
    </section>
  </main>
</template>
