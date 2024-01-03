export default function msToTime(timeInMs: number): string {
  const asSeconds = timeInMs / 1000;
  let hours: number | undefined;
  let minutes = Math.floor(asSeconds / 60);
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }

  return hours ? `${hours} h ${minutes} min aproximadamente` : `${minutes} min aproximadamente`;
}
