<script setup lang="ts">
import type { FlightsData } from '../types';
defineProps<{
  flight: FlightsData;
}>();
</script>
<template>
  <div
    class="bg-light p-block-16 p-inline-16 box-shadow-md border-radius-25"
    role="listitem"
  >
    <div class="col-times gap-10">
      <div class="col-left">
        <div>
          <p class="font-size-14">
            Outgoing flight • Wednesday, {{ flight.departureDate }}
          </p>

          <div
            class="flex-row gap-16"
            :aria-label="`${flight.origin} - ${flight.destination}`"
          >
            <p class="text-gray font-size-12">{{ flight.origin }}</p>
            <p class="text-gray font-size-12">{{ flight.destination }}</p>
          </div>
        </div>
        <hr />
        <div class="flex-row gap-16">
          <div aria-label="Duration 09:45 Connection Nonstop">
            <p class="text-gray font-size-12">Departure Date</p>
            <p class="font-size-14 text-dark">{{ flight.departureDate }}</p>
          </div>
          <div aria-label="Duration 09:45">
            <p class="text-gray font-size-12">Return Date</p>
            <p class="font-size-14 text-dark">{{ flight.returnDate }}</p>
          </div>
        </div>
      </div>
      <div class="offer align-right">
        <div class="">
          <p
            class="bg-gray font-size-10 px-10 py-8 box-shadow-md border-radius-25 text-uppercase"
          >
            {{ flight.offerType && 'Best Price' }}
          </p>
        </div>
        <div>
          <p class="text-gray font-size-12">Flight from</p>
          <p class="text-bold font-size-16 text-green">
            <span class="font-size-10">{{ flight.price.currency }}</span>
            {{ flight.price.amount }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
