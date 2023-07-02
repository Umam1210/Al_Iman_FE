
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';
import Home from './pages/guest/HomePage';
import Layout from './components/layout/Layout';
import DetailHomePage from './pages/guest/DetailHomePage';
import AdminHomePage from './pages/admin/AdminHomePage';
import SuntingProduct from './pages/admin/SuntingProduct';
import Dashboard from './pages/admin/Dashboard';
import ListPengguna from './pages/admin/ListPengguna';
import TambahPengguna from './pages/admin/TambahPengguna';
import SuntingPengguna from './pages/admin/SuntingPengguna';
import Product from './pages/admin/Product';
import TambahProduct from './pages/admin/TambahProduct';
import Pesanan from './pages/admin/Pesanan';
import DetailPesanan from './pages/admin/DetailPesanan';
import Voucher from './pages/admin/Voucher';
import TambahVoucher from './pages/admin/TambahVoucher';
import SuntingVoucher from './pages/admin/SuntingVoucher';
import PembeliKatalog from './pages/pembeli/PembeliKatalog';
import DetailProductAdmin from './pages/admin/DetailProduct';
import DashboardPembeli from './pages/pembeli/DashboardPembeli';
import Pelapak from './pages/pembeli/Pelapak';
import PesananSaya from './pages/pembeli/PesananSaya';
import VoucherSaya from './pages/pembeli/VoucherSaya';
import FormPesanan from './pages/pembeli/FormPesanan';
import DetailPesananPembeli from './pages/pembeli/DetailPesananPembeli';
import ProductSaya from './pages/Pelapak/ProductSaya';
import TambahProductPelapak from './pages/Pelapak/TambahProductPelapak';
import PesananPelapak from './pages/Pelapak/PesananPelapak';
import DetailPesananPelapak from './pages/Pelapak/DetailPesananPelapak';
import DaftarProductByIdPelapak from './pages/pembeli/DaftarProductByIdPelapak';
import { useCookies } from 'react-cookie';
import { useSelector } from 'react-redux';
import { useAuthEffect } from './routes/useAuthEffect';
// import { useAccessControl } from './routes/useAccessControl';
import Dikonfirmasi from './pages/admin/Dikonfirmasi';
import MenungguKonfirmasi from './pages/admin/MenungguKonfirmasi';
import Dibatalkan from './pages/admin/Dibatalkan';
import Selesai from './pages/admin/Selesai';
import PembeliDikonfirmasi from './pages/pembeli/PembeliDikonfirmasi';
import PemebeliMenungguKonfirmasi from './pages/pembeli/PemebeliMenungguKonfirmasi';
import PemebeliDibatalkan from './pages/pembeli/PemebeliDibatalkan';
import PembeliSelesai from './pages/pembeli/PembeliSelesai';
import SuntingProductPelapak from './pages/Pelapak/SuntingProductPelapak';
import PelapakDikonfirmasi from './pages/Pelapak/PelapakDikonfirmasi';
import PelapakSelesai from './pages/Pelapak/PelapakSelesai';
import { ProtectedRoute } from './routes/ProtectedRoute';
import DetailPesananItem from './pages/pembeli/DetailPesananItem';
import { setAuthToken } from './services/API';


function App() {
  const [cookies] = useCookies(['refreshToken']);
  const [id] = useCookies(['userId']);
  const user = useSelector((state) => state.auth);
  const refresh = useSelector((state) => state.me)
  const navigate = useNavigate();
  // const location = useLocation();
  // const userData = JSON.parse(localStorage.getItem('userData'));
  // const data = userData?.[0]?.role;
  const lastVisitedPage = localStorage.getItem('lastVisitedPage');

  useAuthEffect(user, id, cookies, refresh);
  // useAccessControl(user, data, cookies, navigate, location, dispatch);

  useEffect(() => {
    if (lastVisitedPage && !user.isLogin) {
      navigate(lastVisitedPage);
    }
  }, [lastVisitedPage, user?.isLogin, navigate]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
    }, 24 * 60 * 60 * 100);
  }, []);

  const Access = JSON.parse(localStorage.getItem('userData'))
  const token = Access?.[4]?.key
  setAuthToken(token)


  // console.log("user", user?.isLogin);
  // console.log("userData", userData?.[4].key);


  return (
    <>
      <Layout>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/detail/:title' element={<DetailHomePage />} />
          {/*Route Admin */}
          <Route path='/admin/katalog' element={
            <ProtectedRoute userRole={'admin'} >
              <AdminHomePage />
            </ProtectedRoute>
          } />
          <Route path='/admin/detail/:title' element={
            <ProtectedRoute userRole={'admin'} >
              <DetailProductAdmin />
            </ProtectedRoute>
          } />
          <Route path='/admin/sunting/:title/:id' element={
            <ProtectedRoute userRole={'admin'} >
              <SuntingProduct />
            </ProtectedRoute>
          } />
          <Route path='/admin/tambah-product' element={
            <ProtectedRoute userRole={'admin'} >
              <TambahProduct />
            </ProtectedRoute>
          } />
          <Route path='/admin/dashboard' element={
            <ProtectedRoute userRole={'admin'} >
              <Dashboard />
            </ProtectedRoute>} />
          <Route path='/admin/list-pengguna' element={
            <ProtectedRoute userRole={'admin'} >
              <ListPengguna />
            </ProtectedRoute>
          } />
          <Route path='/admin/tambah-pengguna' element={
            <ProtectedRoute userRole={'admin'} >
              <TambahPengguna />
            </ProtectedRoute>
          } />
          <Route path='/admin/sunting-pengguna/:id' element={
            <ProtectedRoute userRole={'admin'} >
              <SuntingPengguna />
            </ProtectedRoute>
          } />
          <Route path='/admin/products' element={
            <ProtectedRoute userRole={'admin'} >
              <Product />
            </ProtectedRoute>
          } />
          <Route path='/admin/pesanan/' element={
            <ProtectedRoute userRole={'admin'} >
              <Pesanan />
            </ProtectedRoute>
          }>
            <Route path='dikonfirmasi' element={
              <ProtectedRoute userRole={'admin'} >
                <Dikonfirmasi />
              </ProtectedRoute>
            } />
            <Route path='menunggu-konfirmasi' element={
              <ProtectedRoute userRole={'admin'} >
                <MenungguKonfirmasi />
              </ProtectedRoute>
            } />
            <Route path='dibatalkan' element={
              <ProtectedRoute userRole={'admin'} >
                <Dibatalkan />
              </ProtectedRoute>
            } />
            <Route path='selesai' element={
              <ProtectedRoute userRole={'admin'} >
                <Selesai />
              </ProtectedRoute>
            } />
          </Route>
          <Route path='/admin/detail-pesanan/:id' element={
            <ProtectedRoute userRole={'admin'} >
              <DetailPesanan />
            </ProtectedRoute>
          } />
          <Route path='/admin/voucher' element={
            <ProtectedRoute userRole={'admin'} >
              <Voucher />
            </ProtectedRoute>
          } />
          <Route path='/admin/tambah-voucher' element={
            <ProtectedRoute userRole={'admin'} >
              <TambahVoucher />
            </ProtectedRoute>
          } />
          <Route path='/admin/sunting-voucher/:id' element={
            <ProtectedRoute userRole={'admin'} >
              <SuntingVoucher />
            </ProtectedRoute>
          } />

          {/* Route Pembeli */}
          <Route path='/pembeli/katalog' element={<PembeliKatalog />} />
          <Route path='/pembeli/detail/:title' element={
            <ProtectedRoute userRole={'pembeli'} >
              <DetailPesananPembeli />
            </ProtectedRoute>
          } />
          <Route path='/pembeli/dashboard' element={
            <ProtectedRoute userRole={'pembeli'} >
              <DashboardPembeli />
            </ProtectedRoute>
          } />
          <Route path='/pembeli/list-pelapak' element={
            <ProtectedRoute userRole={'pembeli'} >
              <Pelapak />
            </ProtectedRoute>
          } />
          <Route path='/pembeli/daftar-produk-pelapak/:id' element={
            <ProtectedRoute userRole={'pembeli'} >
              <DaftarProductByIdPelapak />
            </ProtectedRoute>
          } />

          <Route path='/pembeli/pesanan-saya/' element={
            <ProtectedRoute userRole={'pembeli'} >
              <PesananSaya />
            </ProtectedRoute>
          } >
            <Route path='dikonfirmasi' element={
              <ProtectedRoute userRole={'pembeli'} >
                <PembeliDikonfirmasi />
              </ProtectedRoute>
            } />
            <Route path='menunggu-konfirmasi' element={
              <ProtectedRoute userRole={'pembeli'} >
                <PemebeliMenungguKonfirmasi />
              </ProtectedRoute>
            } />
            <Route path='dibatalkan' element={
              <ProtectedRoute userRole={'pembeli'} >
                <PemebeliDibatalkan />
              </ProtectedRoute>
            } />
            <Route path='selesai' element={
              <ProtectedRoute userRole={'pembeli'} >
                <PembeliSelesai />
              </ProtectedRoute>
            } />
          </Route>
          <Route path='/pembeli/voucher-saya' element={
            <ProtectedRoute userRole={'pembeli'} >
              <VoucherSaya />
            </ProtectedRoute>
          } />
          <Route path='/pembeli/pesanan/:title/:id' element={
            <ProtectedRoute userRole={'pembeli'} >
              <FormPesanan />
            </ProtectedRoute>
          } />
          <Route path='/pembeli/detail-pesanan/:id' element={
            <ProtectedRoute userRole={'pembeli'} >
              <DetailPesananItem />
            </ProtectedRoute>
          } />


          {/* Route Pelapak */}
          <Route path='/pelapak/product-saya' element={
            <ProtectedRoute userRole={'pelapak'} >
              <ProductSaya />
            </ProtectedRoute>
          } />
          <Route path='/pelapak/pesanan/' element={
            <ProtectedRoute userRole={'pelapak'} >
              <PesananPelapak />
            </ProtectedRoute>
          } >
            <Route path='dikonfirmasi' element={
              <ProtectedRoute userRole={'pelapak'} >
                <PelapakDikonfirmasi />
              </ProtectedRoute>
            } />
            <Route path='selesai' element={
              <ProtectedRoute userRole={'pelapak'} >
                <PelapakSelesai />
              </ProtectedRoute>
            } />
          </Route>
          <Route path='/pelapak/detail-pesanan/:id' element={
            <ProtectedRoute userRole={'pelapak'} >
              <DetailPesananPelapak />
            </ProtectedRoute>
          } />
          <Route path='/pelapak/tambah-produk' element={
            <ProtectedRoute userRole={'pelapak'} >
              <TambahProductPelapak />
            </ProtectedRoute>
          } />
          <Route path='/pelapak/sunting-produk/:id' element={
            <ProtectedRoute userRole={'pelapak'} >
              <SuntingProductPelapak />
            </ProtectedRoute>
          } />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

