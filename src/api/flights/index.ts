import { FlightsData } from '../../types';

export const getFlights = async (): Promise<FlightsData[]> => {
  const response = await fetch('http://localhost:3000/flights');
  const data = await response.json();
  return data;
};
