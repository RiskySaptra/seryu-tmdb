export function minutesToHoursAndMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const result = `${hours}h ${remainingMinutes}m`;
  return result;
}

export function arrayToString(array: any, property: string) {
  const values = array.map((obj: any) => obj[property]);
  const result = values.join(", ");
  return result;
}

export function calculatePercentage(part: number, whole: number) {
  if (whole === 0) {
    return 0;
  }
  const percentage = (part / whole) * 100;
  const roundedPercentage = Math.floor(percentage);
  return roundedPercentage;
}

export const isFavorites = (movieId: number) => {
  const favorites: any = localStorage.getItem("favorites");
  if (!favorites) return false;
  const obj = JSON.parse(favorites);
  return obj[movieId] || false;
};

export const isWatchlist = (movieId: number) => {
  const watchlist: any = localStorage.getItem("watchlist");
  if (!watchlist) return false;
  const obj = JSON.parse(watchlist);
  return obj[movieId] || false;
};

export const setItemToLocalStorage = (data: any, key: string) => {
  const result = data.reduce((acc: any, movie: any) => {
    acc[movie.id] = movie.title;
    return acc;
  }, {});

  localStorage.setItem(key, JSON.stringify(result));
};
