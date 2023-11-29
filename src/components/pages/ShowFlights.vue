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
    price: {
      currency: 'GBP',
      amount: 147.99,
    },
    offerType: 'BestPrice',
    uuid: '1',
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
