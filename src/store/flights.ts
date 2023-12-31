import { defineStore } from 'pinia';
import { FlightsData } from '../types';
import { getFlights } from '../api';

type FlightsStore = {
  flights: FlightsData[];
  error: unknown;
  isLoading: boolean;
};

export const useFlightsStore = defineStore('fligths-data', {
  state: (): FlightsStore => ({
    flights: [],
    error: null,
    isLoading: false,
  }),

  actions: {
    async getFlights() {
      try {
        this.isLoading = true;
        const data = await getFlights();
        this.flights = data;
      } catch (error) {
        this.error = error;
      } finally {
        this.isLoading = false;
      }
    },

    filterFlights(selected: string) {
      return this.flights.filter((flight) => {
        if (selected === 'origin') {
          return flight.origin === 'MAD';
        } else if (selected === 'destination') {
          return flight.destination === 'MAD';
        } else {
          return flight;
        }
      });
    },
    // ...
  },
});
