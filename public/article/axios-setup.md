---
title: Axios Setup Documentation
---

# Axios Setup Documentation

Dokumentasi ini menjelaskan konfigurasi dan fungsi-fungsi yang mendukung setup Axios untuk menangani autentikasi, refresh token, dan penanganan error.


## Imports

```ts
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import store, { IRootState } from '../store';
import { forceLogout, issueAccessToken, logout } from '../store/AuthSlice';
import { AuthModel } from '../models/auth';
````

* **Axios Types**: `AxiosError`, `AxiosInstance`, `AxiosRequestConfig`, `AxiosResponse`, `InternalAxiosRequestConfig`.
* **Store & State**: `store` dan tipe `IRootState` untuk mengambil state global.
* **Auth Actions**: `forceLogout`, `issueAccessToken`, `logout` untuk mengelola flow autentikasi.
* **Model Auth**: `AuthModel` merepresentasikan struktur data autentikasi.

## Variabel Global
```ts
let isRefreshing = false;
let failedQueue: any[] = [];
```

isRefreshing: penanda (flag) yang menunjukkan apakah proses refresh token sedang berjalan. Mencegah multiple permintaan refresh token bersamaan.

failedQueue: antrian untuk menyimpan resolvers/rejecters dari permintaan yang gagal karena 401 Unauthorized saat token sedang di-refresh. Setelah refresh selesai, permintaan di-antrian ini akan diproses ulang atau ditolak.

## Interface `CustomAxiosRequestConfig`

```ts
export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipAuthRefresh?: boolean;
}
```

Menambahkan properti opsional `skipAuthRefresh` pada konfigurasi request agar beberapa request dapat mengabaikan mekanisme refresh token.

## Fungsi `getAuth`

```ts
const getAuth = (): AuthModel | undefined => {
  const state: IRootState = store.getState();
  return state.auth?.auth;
};
```

Mengambil data autentikasi (`token` dan `refresh_token`) dari Redux store. Jika tidak ada, akan mengembalikan `undefined`.

## Fungsi `setupAxios`

```ts
export function setupAxios(axiosInstance: AxiosInstance): AxiosInstance {
  // ...
}
```

Fungsi utama untuk:

1. Mengatur default headers dan baseURL.
2. Menambahkan interceptor pada request.
3. Menambahkan interceptor pada response untuk menangani error, khususnya status `401` dan `403`.

### Defaults

```ts
axiosInstance.defaults.headers.Accept = 'application/json';
axiosInstance.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;
```

* `Accept: application/json` menjamin server mengirim response dengan JSON.
* `baseURL` diambil dari environment variable.

### Interceptor Request

```ts
const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const auth = getAuth();
  if (auth?.token) {
    config.headers.Authorization = `Bearer ${auth.token}`;
  }
  return config;
};

axiosInstance.interceptors.request.use(onRequest, onRequestError);
```

* **onRequest**: menambahkan header `Authorization` jika token tersedia.
* **onRequestError**: meneruskan error request.

### Interceptor Response

```ts
axiosInstance.interceptors.response.use(onResponse, onResponseError);
```

* **onResponse**: mengembalikan response tanpa perubahan.
* **onResponseError**: menangani error response.

### Penanganan Error Response

```ts
const onResponseError = async (error: AxiosError): Promise<any> => {
  const config = error.config as CustomAxiosRequestConfig;
  const auth = getAuth();

  if (config.skipAuthRefresh) {
    return Promise.reject(error);
  }

  if (error.response?.status === 401) {
    // 1. Cek refresh_token
    // 2. Jika sedang refresh, queue request
    // 3. Jika belum, dispatch issueAccessToken
    // 4. Retry request setelah token baru diperoleh
  }

  if (error.response?.status === 403) {
    // Redirect ke halaman 404 jika pada protected path
  }

  return Promise.reject(error);
};
```

* **401 Unauthorized**: mencoba mekanisme refresh token sebelum memaksa logout.
* **403 Forbidden**: redirect ke `/404` jika mengakses endpoint protected.
* `skipAuthRefresh`: jika `true`, proses refresh token akan diabaikan.

## Penjelasan Alur `refresh token`

1. **Gagal request** dengan status `401` dan `skipAuthRefresh === false`.
2. Jika tidak ada `refresh_token`, dispatch `forceLogout()` dan tolak promise.
3. Jika `isRefreshing === true`, simpan promise pada `failedQueue` untuk diproses setelah refresh selesai.
4. Atur `isRefreshing = true` dan dispatch `issueAccessToken(refresh_token)`.
5. Setelah berhasil, ambil `token` baru dari store:

   * Proses queue: panggil ulang request dengan token baru.
6. Jika gagal, proses queue dengan error, dispatch `logout()`, dan tolak promise.
7. Set `isRefreshing = false`.

## Ekspor dan Penggunaan

```ts
export { setupAxios, getAuth };
```

**Cara menggunakan**:

```ts
import axios from 'axios';
import { setupAxios } from './path/to/axios-setup';

const apiClient = setupAxios(axios.create());

// Contoh panggilan
apiClient.get('/merchant/data')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```
**Atau panggil langsung di React App main.tsx**
```ts
import { setupAxios } from './auth/AuthHelper';
import axios from 'axios';
setupAxios(axios)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  ....
```

Full code example
```ts
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import store, { IRootState } from '../store'; // Pastikan path ini sesuai
import { forceLogout, issueAccessToken, logout } from '../store/AuthSlice';
import { AuthModel } from '../models/auth';

let isRefreshing = false;
let failedQueue: any[] = [];

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipAuthRefresh?: boolean;
}

const getAuth = (): AuthModel | undefined => {
  const state: IRootState = store.getState();
  if (state.auth?.auth) {
    return state.auth.auth;
  } else {
    return undefined;
  }
};


export function setupAxios(axiosInstance: AxiosInstance): AxiosInstance {
  axiosInstance.defaults.headers.Accept = 'application/json';
  axiosInstance.defaults.baseURL = import.meta.env.VITE_APP_BASE_URL;

  const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const auth = getAuth();
    if (auth && auth.token) {
      config.headers.Authorization = `Bearer ${auth.token}`;
    }
    return config;
  };

  const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  };

  const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response;
  };

  const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
      if (error) {
        prom.reject(error);
      } else {
        prom.resolve(token);
      }
    });
    failedQueue = [];
  };

  const onResponseError = async (error: AxiosError): Promise<any> => {
    const config = error.config as CustomAxiosRequestConfig;
    const auth = getAuth();

    if (config?.skipAuthRefresh) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401) {
      if (!auth?.refresh_token) {
        console.log('No refresh token found');
        store.dispatch(forceLogout());
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(token => {
            if (config.headers) {
              config.headers['Authorization'] = 'Bearer ' + token;
            }
            console.log('refreshed token', token);
            return axiosInstance(config as InternalAxiosRequestConfig);
          })
          .catch(err => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      try {
        console.log('refreshing token');
        await store.dispatch(issueAccessToken(auth.refresh_token) as any);
        const newAuth = getAuth();
        processQueue(null, newAuth?.token || null);
        if (config.headers && newAuth?.token) {
          config.headers['Authorization'] = `Bearer ${newAuth.token}`;
        }
        return axiosInstance(config as InternalAxiosRequestConfig);
      } catch (err) {
        processQueue(err, null);
        store.dispatch(logout(auth?.refresh_token || ""));
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    const protectedPaths = ['/merchant', '/administrator', '/device', '/fota','/voice'];
    if (error.response?.status === 403) {
      const currentPath = window.location.pathname;
      if (protectedPaths.some(path => currentPath.startsWith(path))) {
        window.location.href = '/404';
      }
    }

    return Promise.reject(error);
  };

  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

export { getAuth };
```