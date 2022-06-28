export const getDuration = (minutes: number): string => {
  if (!minutes) {
    return 'Unknown';
  }

  const hours = Math.trunc(minutes / 60);
  const min = minutes % 60;

  return `${hours}h ${min} min`;
};
