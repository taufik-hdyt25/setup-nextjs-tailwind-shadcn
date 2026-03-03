import axios, { AxiosRequestConfig, Method } from "axios";
import { axiosInstance } from "./axios";

interface CallAPIProps<TBody = unknown, TQuery = unknown> {
  method: Method;
  path: string;
  query?: TQuery;
  body?: TBody;
  headers?: Record<string, string>;
  baseURL?: string;
  basicAuth?: {
    username: string;
    password: string;
  };
}

const callAPI = async <TResponse = unknown, TBody = unknown, TQuery = unknown>({
  method,
  path,
  query,
  body,
  headers,
  baseURL,
  basicAuth,
}: CallAPIProps<TBody, TQuery>): Promise<TResponse> => {
  try {
    const config: AxiosRequestConfig & { _retry?: boolean } = {
      baseURL,
      url: path,
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      params: query,
      data: body,
      auth: basicAuth,
    };
    const { data } = await axiosInstance.request<TResponse>(config);
    return data;
  } catch (err: unknown) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data || { message: err.message || "Network Error" };
    }
    throw err;
  }
};

export default callAPI;
