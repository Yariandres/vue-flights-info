export type FlightsData = {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  price: {
    currency: string;
    amount: number;
  };
  offerType: string;
  uuid: string;
};
