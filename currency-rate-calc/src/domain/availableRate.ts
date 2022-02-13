export type AvailableRate = {
  code: string;
};

export const AvailableRate = (availableRate: AvailableRate) => ({
  value: availableRate,
});
