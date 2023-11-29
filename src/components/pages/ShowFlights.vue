<script setup lang="ts">
import { ref } from 'vue';
import type { FlightsData } from '../../types';
import AppFilter from '../AppFilter.vue';
import FlightsList from '../FlightsList.vue';

const flights = ref<FlightsData[]>([
  {
    origin: 'BHX',
    destination: 'AGA',
    duration: 'PT08H00M',
    connection: 'Nonstop',
    price: 147.99,
    uuid: '1',
  },
  {
    origin: 'LHR',
    destination: 'CDG',
    duration: 'PT01H30M',
    connection: 'Nonstop',
    price: 99.99,
    uuid: '2',
  },
  {
    origin: 'JFK',
    destination: 'LAX',
    duration: 'PT05H30M',
    connection: '1 stop',
    price: 299.99,
    uuid: '3',
  },
  {
    origin: 'SFO',
    destination: 'ORD',
    duration: 'PT04H30M',
    connection: 'Nonstop',
    price: 199.99,
    uuid: '4',
  },
  {
    origin: 'DXB',
    destination: 'LHR',
    duration: 'PT07H45M',
    connection: 'Nonstop',
    price: 249.99,
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
