export const getDuration = (minutes: number): string => {
  if (minutes === 0) {
    return 'Unknown';
  }

  const hours = Math.trunc(minutes / 60);
  const min = minutes % 60;

  return `${hours}h ${min} min`;
};
