import { getAccessToken, getRequestToken } from "../_handlers/auth";
import { getFavorite, getWatchlist } from "../_handlers/getMovies";

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

export const handleGetAccessToken = async () => {
  const token: any = await getAccessToken();
  localStorage.setItem("account_id", token.account_id);
  localStorage.setItem("access_token", token.access_token);
  await getFavorite();
  await getWatchlist();
};

export const handleLogin = async () => {
  const currentToken = localStorage.getItem("request_token") || "";
  if (!currentToken) {
    const token: any = await getRequestToken();
    localStorage.setItem("request_token", token.request_token);
    window.open(
      `https://www.themoviedb.org/auth/access?request_token=${token.request_token}`,
      "_blank",
      "rel=noopener noreferrer"
    );
    return;
  }

  window.open(
    `https://www.themoviedb.org/auth/access?request_token=${currentToken}`,
    "_blank",
    "rel=noopener noreferrer"
  );
};
