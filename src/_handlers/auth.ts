import { clientInstance } from "../_lib/axios-client";

export async function getRequestToken() {
  const { data }: any = await clientInstance.post(`/4/auth/request_token`);
  return data;
}

export async function getAccessToken() {
  const getCurrentToken = localStorage.getItem("request_token");
  const { data }: any = await clientInstance.post(`/4/auth/access_token`, {
    request_token: getCurrentToken,
  });
  return data;
}
