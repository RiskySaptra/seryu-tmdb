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

export const setBulkItemToLocalStorage = (data: any, key: string) => {
  const result = data.reduce((acc: any, movie: any) => {
    acc[movie.id] = true;
    return acc;
  }, {});

  localStorage.setItem(key, JSON.stringify(result));
};
