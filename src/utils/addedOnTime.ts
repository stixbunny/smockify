export default function addedOnTime(dateString: string) {
  const date = new Date(dateString);
  if (date.getTime() === 0) return '';
  const current = Date.now();
  const difference = current - date.getTime();
  const hours = Math.floor(difference / 1000 / 60 / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (hours < 24) {
    if (hours == 0) return 'recientemente';
    return `hace ${hours} hora${hours > 1 ? 's' : ''}`;
  }
  if (days < 7) {
    return `hace ${days} dia${days > 1 ? 's' : ''}`;
  }
  if (weeks < 5) {
    return `hace ${weeks} semana${weeks > 1 ? 's' : ''}`;
  }

  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
