export const getDuration = (minutes: number): string => {
  if (minutes === 0) {
    return '0 min';
  } else {
    const hours = Math.trunc(minutes / 60);
    const min = minutes % 60;

    return `${hours}h ${min} min`;
  }
};
