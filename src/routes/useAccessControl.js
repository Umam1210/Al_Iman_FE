import { useEffect } from 'react';

export const useAccessControl = (user, data, cookies, navigate, location, dispatch) => {
  useEffect(() => {
    if (!user.isLogin) {
      const currentPath = location.pathname;
      const allowedPaths = ['/', '/detail/:title'];

      const isAllowedPath = allowedPaths.some((path) => {
        const regex = new RegExp(
          '^' + path.replace(/:[\w\s]+/g, '\\S+').replace(/\//g, '\\/') + '$'
        );
        return regex.test(currentPath);
      });

      if (!isAllowedPath) {
        navigate('/');
      }
    } else {
      if (data === 'pembeli') {
        const currentPath = location.pathname;
        const allowedPaths = [
          '/pembeli/katalog',
          '/pembeli/dashboard',
          '/pembeli/list-pelapak',
          // '/pembeli/pesanan-saya',
          '/pembeli/pesanan-saya/dikonfirmasi',
          '/pembeli/pesanan-saya/menunggu-konfirmasi',
          '/pembeli/pesanan-saya/dibatalkan',
          '/pembeli/pesanan-saya/selesai',
          '/pembeli/voucher-saya',
          '/pembeli/detail/:title',
          '/pembeli/pesanan/:id/:status',
          '/pembeli/pelapak-produk/:id'
        ];

        const isAllowedPath = allowedPaths.some((path) => {
          const regex = new RegExp(
            '^' + path.replace(/:[\w\s]+/g, '\\S+').replace(/\//g, '\\/') + '$'
          );
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
          // '/admin/pesanan',
          '/admin/pesanan/dikonfirmasi',
          '/admin/pesanan/menunggu-konfirmasi',
          '/admin/pesanan/dibatalkan',
          '/admin/pesanan/selesai',
          '/admin/detail-pesanan/:id',
          '/admin/voucher',
          '/admin/tambah-voucher',
          '/admin/sunting-voucher/:id',
          '/admin/sunting-pengguna/:id'
        ];

        const isAllowedPath = allowedPaths.some((path) => {
          const regex = new RegExp(
            '^' + path.replace(/:[\w\s]+/g, '\\S+').replace(/\//g, '\\/') + '$'
          );
          return regex.test(currentPath);
        });

        if (!isAllowedPath) {
          navigate('/admin/katalog');
        } else {
          localStorage.setItem('lastVisitedPage', currentPath);
        }
      } else if (data === 'pelapak') {
        const currentPath = location.pathname;
        const allowedPaths = [
          '/pelapak/product-saya',
          '/pelapak/pesanan/dikonfirmasi',
          '/pelapak/pesanan/selesai',
          '/pelapak/detail-pesanan/:id',
          '/pelapak/tambah-produk',
          '/pelapak/sunting-produk/:id'
        ];

        const isAllowedPath = allowedPaths.some((path) => {
          const regex = new RegExp(
            '^' + path.replace(/:[\w\s]+/g, '\\S+').replace(/\//g, '\\/') + '$'
          );
          return regex.test(currentPath);
        });

        if (!isAllowedPath) {
          navigate('/pelapak/product-saya');
        } else {
          localStorage.setItem('lastVisitedPage', currentPath);
        }
      } else {
        navigate('/');
      }
    }
  }, [cookies.refreshToken, navigate, data, user.isLogin, location.pathname, dispatch]);
};
