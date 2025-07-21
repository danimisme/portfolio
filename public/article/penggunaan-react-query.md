---
title: Penggunaan React Query
date: 2024-09-10
---


## Dokumentasi Penggunaan React Query (TanStack Query)
- Dibuat pada: 10 September 2024

>Dokumentasi ini membantu kita memahami cara mengintegrasikan React Query (TanStack Query) pada aplikasi React, mulai dari setup Axios hingga penggunaan query dan mutation di komponen.


### Mengapa React Query?

* **Caching Otomatis**: Data yang sudah di-fetch disimpan otomatis, mengurangi beban server.
* **Loading & Error Handling**: `useQuery` menyediakan `isLoading` dan `isError` tanpa membuat state sendiri.
* **Invalidate & Refetch**: Setelah mutation (create or update data), cukup panggil `invalidateQueries` untuk menyegarkan data.
* **Deduplication & Sinkronisasi**: Banyak komponen pakai query sama akan digabung menjadi satu request.




## Contoh Penggunaan

### 1. Persiapan (Setup Axios)

```typescript
export function setupAxios(axiosInstance: AxiosInstance): AxiosInstance {
  // Set header Accept untuk semua request
  axiosInstance.defaults.headers.Accept = "application/json";
  // Atur baseURL dari environment variable
  axiosInstance.defaults.baseURL = process.env.aksesBayarAPIURI;

  const onRequest = (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {
    // Ambil token autentikasi jika tersedia
    const auth = getAuth();
    if (auth) {
      // Tambahkan header Authorization
      config.headers.Authorization = `Bearer ${auth}`;
    }
    return config;
  };

  // Pasang interceptor untuk setiap request
  axiosInstance.interceptors.request.use(onRequest);
  return axiosInstance;
}
```

**Penjelasan:**

* `axiosInstance.defaults.headers.Accept`: Mengatur semua response yang diterima dalam format JSON.
* `axiosInstance.defaults.baseURL`: Menentukan URL dasar untuk semua request berdasarkan `process.env.aksesBayarAPIURI`.
* Interceptor `onRequest`: Mengecek apakah ada token autentikasi, lalu menambahkan header `Authorization`.

---

### 2. Mendefinisikan Fungsi API Call

```typescript
// Fungsi untuk mengambil daftar pengguna
export const getUsers = async (query: string) => {
  const res = await axios.get(`${baseUrl}?${query}`);
  return res.data.data as Pagination<UserType[]>;
};

// Fungsi untuk menambah pengguna baru
export const addUser = async (data: AddUserPayload) => {
  const res = await axios.post<AxiosResponse<Base<UserType>>>(`${baseUrl}`, data);
  return res.data.data;
};

// Fungsi untuk memperbarui data pengguna
export const updateUser = async (id: string, data: UpdateUserPayload) => {
  const res = await axios.put<AxiosResponse<Base<UserType>>>(`${baseUrl}/${id}`, data);
  return res.data.data;
};
```

**Penjelasan:**

* Setiap fungsi melakukan *HTTP request* menggunakan `axios`.
* `getUsers` mengembalikan data dalam struktur `Pagination<UserType[]>`.
* `addUser` dan `updateUser` mengembalikan objek `UserType` setelah operasi selesai.

---

### 3. Membuat Hooks dengan React Query

```typescript
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const _USERS = 'users';

// Hook untuk mengambil daftar pengguna
export const useGetUsers = (query: string) => {
  return useQuery({
    queryKey: [_USERS, query],
    queryFn: () => getUsers(query),
    refetchOnWindowFocus: true // Refetch saat window kembali aktif
  });
};

// Hook untuk menambah pengguna
export const useAddUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: AddUserPayload) => addUser(data),
    onSuccess: () => {
      navigate('/administrator');
      toast.success('Berhasil Menambah Administrator');
      // Invalidate query agar data terbaru diambil ulang
      queryClient.invalidateQueries({ queryKey: [_USERS] });
    },
    onError: (err: AxiosError) => {
      console.error(err);
      toast.error('Gagal Menambah Administrator');
    }
  });
};

// Hook untuk memperbarui pengguna
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserPayload }) => updateUser(id, data),
    onSuccess: () => {
      navigate('/administrator');
      toast.success('Berhasil Mengubah Administrator');
      queryClient.invalidateQueries({ queryKey: [_USERS] });
    },
    onError: (err: AxiosError) => {
      console.error(err);
      toast.error('Gagal Mengubah Administrator');
    }
  });
};
```

**Penjelasan:**

* `useQuery` mengeksekusi `getUsers` dan mengelola status `isLoading`, `isError`, `data`, `isFetching`.
* `useMutation` untuk operasi create/update otomatis menyediakan status `isLoading`, `isError`, dan `onSuccess`.
* `queryClient.invalidateQueries(...)` akan menandai cache untuk di-refetch, tanpa perlu `useEffect` manual.

---

### 4. Penggunaan di Komponen Tabel

```tsx
import { useGetUsers } from '../hooks/user';

export function UserTable({ queryParams, page, pageSize, setPage }) {
  const { data: users, isFetching } = useGetUsers(queryParams);

  return (
    <>
      {isFetching && <p>Loading data...</p>}
      <DataTable
        columns={columns}
        records={users?.rows}
        totalRecords={users?.total_rows}
        page={page}
        recordsPerPage={pageSize}
        onPageChange={setPage}
      />
    </>
  );
}
```

**Penjelasan:**

* `isFetching` menandakan data sedang di-refresh.
* Data langsung didapat lewat `users.rows` dan `users.total_rows`.

---

### 5. Penggunaan di Komponen Form User

```tsx
import { useAddUser, useUpdateUser } from '../hooks/user';

function UserForm({ type, administrator }) {
  const { mutateAsync: addUser, isLoading: isLoadingAdd } = useAddUser();
  const { mutateAsync: updateUser, isLoading: isLoadingUpdate } = useUpdateUser();

  const onSubmit: SubmitHandler<AddUserPayload> = async (data) => {
    if (type === 'edit' && administrator) {
      await updateUser({ id: administrator.id, data });
    } else {
      await addUser(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* form fields */}
      <button type="submit" disabled={isLoadingAdd || isLoadingUpdate}>
        {(isLoadingAdd || isLoadingUpdate) ? 'Memproses...' : 'Simpan'}
      </button>
    </form>
  );
}
```

**Penjelasan:**

* `mutateAsync` mengembalikan Promise, sehingga bisa `await`.
* `isLoadingAdd` dan `isLoadingUpdate` bisa dipakai menampilkan loading di tombol.

---

### 6. Kelebihan Menggunakan React Query

1. **Cache Otomatis & Invalidate Query**

   * Setelah melakukan `addUser` atau `updateUser`, cukup panggil `invalidateQueries` untuk memicu refetch data secara otomatis.
   * Tanpa perlu menulis `useEffect` ekstra untuk memantau perubahan.

2. **Refetch on Window Focus**

   * Secara default, query dapat melakukan refetch saat pengguna kembali ke tab browser, menjamin data selalu up-to-date.

3. **State Management**

   * Otomatis menyediakan status `isLoading`, `isError`, `isFetching`, sehingga memudahkan menampilkan loading spinner atau error message.

4. **Optimistic Update (Opsional)**

   * Bisa diimplementasikan untuk memperkaya UX dengan memperbarui UI sebelum server merespon.

5. **Deduplication**

   * Jika ada banyak komponen meminta data yang sama, request digabungkan dan dijalankan sekali saja.

#### Rekomendasi Struktur Folder Project

```
src/
├─ features/
│  ├─ user/
│  │  ├─ components/  # komponen terkait fitur user
│  │  ├─ hooks/       # custom hooks (misal, useUserData)
│  │  └─ services/    # layanan API (misal, userAPI.ts)
│  ├─ products/
│  │  ├─ components/  # komponen terkait fitur products
│  │  ├─ hooks/       # custom hooks (misal, useProducts)
│  │  └─ services/    # layanan API (misal, productsAPI.ts)
│  └─ ... (fitur lain)
├─ shared/
│  ├─ components/  # komponen UI reusable (misal, Button, Input)
│  ├─ hooks/       # hook umum (misal, useDebounce)
│  └─ services/    # utilitas atau API client umum (misal, apiClient.ts)
├─ App.tsx
├─ index.tsx
└─ ...
```   

---

> Dengan React Query, kita tidak perlu lagi repot mengelola state permintaan data secara manual. Cukup fokus pada definisi `queryKey`, `queryFn`, dan `onSuccess`/`onError` di `useMutation`, sisanya di-handle oleh TanStack Query secara otomatis.


## 📚 Referensi:
- [TanStack Query (Resmi)](https://tanstack.com/query/latest)
- [Medium Articles](https://medium.com)
- [Javascript Plain English](https://javascript.plainenglish.io)