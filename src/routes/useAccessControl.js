import { useEffect } from 'react';

export const useAccessControl = (user, data, cookies, navigate, location, dispatch) => {
  useEffect(() => {
    if (!user.isLogin) {
      navigate('/');
    } else {
      // Pengguna sudah login
      if (data === 'user') {
        const currentPath = location.pathname;
        const allowedPaths = [
          '/pembeli/katalog',
          '/pembeli/dashboard',
          '/pembeli/list-pelapak',
          '/pembeli/pesanan-saya',
          '/pembeli/voucher-saya',
          '/pembeli/detail/:title',
          '/pembeli/pesanan/:id/:status',
          '/pembeli/pelapak-produk/:id'
        ];

        const isAllowedPath = allowedPaths.some((path) => {
          const regex = new RegExp('^' + path.replace(/:\w+/g, '\\w+').replace(/\//g, '\\/') + '$');
          return regex.test(currentPath);
        });

        if (!isAllowedPath) {
          navigate('/pembeli/katalog');
        } else {
          localStorage.setItem('lastVisitedPage', currentPath);
        }
      } else if (data === 'admin') {
        const currentPath = location.pathname;
        const allowedPaths = [
          '/admin/katalog',
          '/admin/tambah-product',
          '/admin/dashboard',
          '/admin/list-pengguna',
          '/admin/tambah-pengguna',
          '/admin/detail/:title',
          '/admin/sunting/:title/:id',
          '/admin/products',
          '/admin/pesanan',
          '/admin/detail-pesanan/:id',
          '/admin/voucher',
          '/admin/tambah-voucher',
          '/admin/sunting-voucher/:id',
          '/admin/sunting-pengguna/:id'
        ];

        const isAllowedPath = allowedPaths.some((path) => {
          const regex = new RegExp('^' + path.replace(/:\w+/g, '\\w+').replace(/\//g, '\\/') + '$');
          return regex.test(currentPath);
        });

        if (!isAllowedPath) {
          navigate('/admin/katalog');
        } else {
          localStorage.setItem('lastVisitedPage', currentPath);
        }
      } else if (data === 'pelapak') {
        // Logika untuk pengguna dengan peran "pelapak"
        const currentPath = location.pathname;
        const allowedPaths = [
          '/pelapak/product-saya',
          '/pelapak/pesanan',
          '/pelapak/detail-pesanan/:id',
          '/pelapak/tambah-produk'
        ];

        const isAllowedPath = allowedPaths.some((path) => {
          const regex = new RegExp('^' + path.replace(/:\w+/g, '\\w+').replace(/\//g, '\\/') + '$');
          return regex.test(currentPath);
        });

        if (!isAllowedPath) {
          navigate('/');
        } else {
          localStorage.setItem('lastVisitedPage', currentPath);
        }
      } else {
        navigate('/'); // Pengalihan halaman default jika peran tidak dikenali
      }
    }
  }, [cookies.refreshToken, navigate, data, user.isLogin, location.pathname, dispatch]);
};
