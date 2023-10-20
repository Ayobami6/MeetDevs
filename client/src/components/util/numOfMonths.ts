export const noOfMonths = (start: Date, end: Date): number => {
  const diff = Math.abs(start.getTime() - end.getTime());
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  return months;
};
