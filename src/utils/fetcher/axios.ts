import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

// interface CustomConfig extends InternalAxiosRequestConfig {
//   _retry?: boolean;
// }

// let isRefreshing = false;
// let failedQueue: any[] = [];

// const processQueue = (error: any, token: string | null = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) prom.reject(error);
//     else prom.resolve(token);
//   });
//   failedQueue = [];
// };

// let sessionPromise: Promise<any> | null = null;
// let tokenCache: string | null = null;

// const getTokenSecurely = async () => {
//   if (tokenCache) return tokenCache;
//   if (!sessionPromise) {
//     sessionPromise = getSession().then((session) => {
//       tokenCache = session?.user?.accessToken ?? null;
//       sessionPromise = null;
//       return tokenCache;
//     });
//   }

//   return sessionPromise;
// };

// axiosInstance.interceptors.request.use(async (config) => {
//   const token = await getTokenSecurely();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// axiosInstance.interceptors.response.use(
//   (res) => res,
//   async (error) => {
//     const originalRequest = error.config as CustomConfig;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             return axiosInstance(originalRequest);
//           })
//           .catch((err) => Promise.reject(err));
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const newToken = await refreshAccessToken();
//         tokenCache = newToken;
//         axiosInstance.defaults.headers.common["Authorization"] =
//           `Bearer ${newToken}`;
//         processQueue(null, newToken);

//         originalRequest.headers.Authorization = `Bearer ${newToken}`;
//         return axios(originalRequest);
//       } catch (err) {
//         processQueue(err, null);
//         await signOut({ redirect: true, callbackUrl: "/" });
//         return Promise.reject(err);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   },
// );
