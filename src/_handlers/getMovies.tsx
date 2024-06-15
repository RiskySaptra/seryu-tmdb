import { clientInstance } from "../_lib/axios-client";

export async function getNowPlaying() {
  const { data }: any = await clientInstance.get(
    `/movie/now_playing?language=en-US&page=1`
  );
  return data;
}

export async function getTopRated() {
  const { data }: any = await clientInstance.get(
    `/movie/top_rated?language=en-US&page=1`
  );
  return data;
}
