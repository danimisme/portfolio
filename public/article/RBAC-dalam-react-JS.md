# RBAC dalam React JS

Role-Based Access Control (RBAC) adalah metode pengelolaan hak akses berdasarkan peran (role) pengguna. Dalam konteks aplikasi React/Next.js, RBAC digunakan untuk membatasi akses pengguna ke halaman atau komponen tertentu sesuai dengan peran mereka (misalnya: admin, user, supervisor).

---

## Konsep Dasar

Dalam implementasi RBAC:
- **User** memiliki satu atau lebih role.
- **Komponen atau halaman** dilindungi berdasarkan role yang diizinkan.
- Jika user tidak memiliki role yang sesuai, maka akses ditolak atau diarahkan ke halaman 403.

---

## Komponen Utama: `RoleProvider`

Untuk mengimplementasikan RBAC di React, kita bisa membuat komponen `RoleProvider` yang:
- Menerima props:
  - `acceptedRole`: array role yang diizinkan.
  - `children`: komponen yang akan dirender jika akses diberikan.
- Mengecek apakah user memiliki salah satu role yang diperbolehkan.
- Jika ya, render children; jika tidak, tampilkan halaman 403.

---

## Contoh Penggunaan

### Halaman Manajemen User

```tsx
<RoleProvider acceptedRole={["admin", "supervisor"]}>
  <CreateUser />
  <UserTable />
</RoleProvider>
```

---

## Implementasi `RoleProvider` dengan Context

```tsx
import { ReactNode, useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import Error403Page from "@/components/Error403Page";

interface RoleProviderProps {
  acceptedRole: string[];
  children: ReactNode;
}

const RoleProvider = ({ acceptedRole, children }: RoleProviderProps) => {
  const { value: userData } = useContext(UserContext);
  const roles = userData.roles;

  const hasAccess = roles?.some(role => acceptedRole.includes(role));

  if (hasAccess) {
    return <>{children}</>;
  }

  return <Error403Page />;
};

export default RoleProvider;
```

---

## Alternatif: Versi dengan Custom Hook

```tsx
import { ReactNode } from "react";
import { useUser } from "@/hooks/useUser";
import Error403Page from "@/components/Error403Page";

interface RoleProviderProps {
  acceptedRole: string[];
  children: ReactNode;
}

const RoleProvider = ({ acceptedRole, children }: RoleProviderProps) => {
  const { roles } = useUser();

  const hasAccess = roles?.some(role => acceptedRole.includes(role));

  if (hasAccess) {
    return <>{children}</>;
  }

  return <Error403Page />;
};

export default RoleProvider;
```

---

## Struktur Folder yang Disarankan

```
components/
├── RoleProvider.tsx
├── Error403Page.tsx
contexts/
├── UserContext.tsx
```

---

## Tips Implementasi

- Pastikan data role user sudah tersedia sebelum pengecekan.
- Gunakan fallback seperti loader saat data belum siap.
- Untuk keamanan ekstra, gabungkan dengan proteksi server-side di Next.js (middleware atau getServerSideProps).

---

Dengan pendekatan ini, implementasi RBAC menjadi modular, reusable, dan mudah dipelihara di seluruh aplikasi React/Next.js kamu.
