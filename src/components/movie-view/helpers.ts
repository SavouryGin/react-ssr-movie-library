export function getDuration(minutes: number): string {
  if (minutes === 0) {
    return '00:00 hours';
  } else {
    const hours = padNumberWithZero(Math.trunc(+minutes / 60));
    const rest = padNumberWithZero(+minutes % 60);

    return `${hours}:${rest} hours`;
  }
}

function padNumberWithZero(n: number): string {
  return n < 10 ? '0' + n : n.toString();
}
