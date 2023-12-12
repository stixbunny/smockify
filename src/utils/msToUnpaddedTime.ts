export default function msToTime(timeInMs: number): string {
  function pad(num: number) {
    return `${num}`.padStart(2, '0');
  }
  function padOne(num: number) {
    return `${num}`.padStart(1, '0');
  }
  const asSeconds = timeInMs / 1000;
  let hours: number | undefined;
  let minutes = Math.floor(asSeconds / 60);
  const seconds = Math.floor(asSeconds % 60);
  if (minutes > 59) {
    hours = Math.floor(minutes / 60);
    minutes %= 60;
  }
  return hours
    ? `${padOne(hours)}:${pad(minutes)}:${pad(seconds)}`
    : `${padOne(minutes)}:${pad(seconds)}`;
}