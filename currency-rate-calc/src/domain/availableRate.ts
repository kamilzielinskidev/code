type AvailableRateP = {
  code: string;
};

export type AvailableRate = Readonly<AvailableRateP>;

export type AvailableRates = ReadonlyArray<AvailableRateP>;

export const AvailableRate = (availableRate: AvailableRate) => availableRate;
