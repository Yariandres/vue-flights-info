<script setup lang="ts">
import { computed, ref } from 'vue';
import type { FlightsData } from '../../types';
import BaseSelect from '../BaseSelect.vue';
import FlightsList from '../FlightsList.vue';

const flights = ref<FlightsData[]>([
  {
    origin: 'MAD',
    destination: 'LON',
    departureDate: '2024-01-01',
    returnDate: '2024-02-01',
    price: {
      currency: 'EUR',
      amount: 147.99,
    },
    offerType: 'BestPrice',
    uuid: '1',
  },
  {
    origin: 'MAD',
    destination: 'LON',
    departureDate: '2024-02-01',
    returnDate: '2024-03-10',
    price: {
      currency: 'EUR',
      amount: 199.99,
    },
    offerType: 'LastMinute',
    uuid: '2',
  },
  {
    origin: 'MAD',
    destination: 'LON',
    departureDate: '2024-03-01',
    returnDate: '2024-04-10',
    price: {
      currency: 'EUR',
      amount: 299.99,
    },
    offerType: 'BestPrice',
    uuid: '3',
  },
  {
    origin: 'MAD',
    destination: 'LON',
    departureDate: '2024-04-01',
    returnDate: '2024-05-10',
    price: {
      currency: 'EUR',
      amount: 249.99,
    },
    offerType: 'LastMinute',
    uuid: '4',
  },
  {
    origin: 'MAD',
    destination: 'LON',
    departureDate: '2024-05-01',
    returnDate: '2024-06-10',
    price: {
      currency: 'EUR ',
      amount: 279.99,
    },
    offerType: 'BestPrice',
    uuid: '5',
  },
  {
    origin: 'LON',
    destination: 'MAD',
    departureDate: '2024-06-01',
    returnDate: '2024-07-10',
    price: {
      currency: 'EUR',
      amount: 199.99,
    },
    offerType: 'BestPrice',
    uuid: '6',
  },
  {
    origin: 'LON',
    destination: 'MAD',
    departureDate: '2024-07-01',
    returnDate: '2024-08-10',
    price: {
      currency: 'EUR',
      amount: 249.99,
    },
    offerType: 'LastMinute',
    uuid: '7',
  },
  {
    origin: 'LON',
    destination: 'MAD',
    departureDate: '2024-08-01',
    returnDate: '2024-09-10',
    price: {
      currency: 'EUR',
      amount: 299.99,
    },
    offerType: 'BestPrice',
    uuid: '8',
  },
  {
    origin: 'LON',
    destination: 'MAD',
    departureDate: '2024-09-01',
    returnDate: '2024-10-10',
    price: {
      currency: 'EUR',
      amount: 249.99,
    },
    offerType: 'LastMinute',
    uuid: '9',
  },
  {
    origin: 'LON',
    destination: 'MAD',
    departureDate: '2024-10-01',
    returnDate: '2024-11-10',
    price: {
      currency: 'EUR',
      amount: 279.99,
    },
    offerType: 'BestPrice',
    uuid: '10',
  },
]);

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
