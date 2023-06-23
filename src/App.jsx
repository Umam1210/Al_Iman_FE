
import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import { useDispatch, useSelector } from 'react-redux';
import { useAuthEffect } from './routes/useAuthEffect';
import { useAccessControl } from './routes/useAccessControl';
import Dikonfirmasi from './pages/admin/Dikonfirmasi';
import MenungguKonfirmasi from './pages/admin/MenungguKonfirmasi';
import Dibatalkan from './pages/admin/Dibatalkan';
import Selesai from './pages/admin/Selesai';


function App() {
  const [cookies] = useCookies(['refreshToken']);
  const [id] = useCookies(['userId']);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const refresh = useSelector((state) => state.me)
  const navigate = useNavigate();
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem('userData'));
  const data = userData?.[0]?.role;
  const lastVisitedPage = localStorage.getItem('lastVisitedPage');

  useAuthEffect(user, id, cookies, refresh);
  useAccessControl(user, data, cookies, navigate, location, dispatch);

  useEffect(() => {
    if (lastVisitedPage && !user.isLogin) {
      navigate(lastVisitedPage);
    }
  }, [lastVisitedPage, user.isLogin, navigate]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
    }, 24 * 60 * 60 * 100);
  }, []);


  console.log("user", user?.isLogin);

  return (
    <>
      <Layout>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/detail/:title' element={<DetailHomePage />} />
          {/*Route Admin */}
          <Route path='/admin/katalog' element={<AdminHomePage />} />
          <Route path='/admin/detail/:title' element={<DetailProductAdmin />} />
          <Route path='/admin/sunting/:title/:id' element={<SuntingProduct />} />
          <Route path='/admin/tambah-product' element={<TambahProduct />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/list-pengguna' element={<ListPengguna />} />
          <Route path='/admin/tambah-pengguna' element={<TambahPengguna />} />
          <Route path='/admin/sunting-pengguna/:id' element={<SuntingPengguna />} />
          <Route path='/admin/products' element={<Product />} />
          <Route path='/admin/pesanan/' element={<Pesanan />}>
            <Route path='dikonfirmasi' element={<Dikonfirmasi />} />
            <Route path='menunggu-konfirmasi' element={<MenungguKonfirmasi />} />
            <Route path='dibatalkan' element={<Dibatalkan />} />
            <Route path='selesai' element={<Selesai />} />
          </Route>
          <Route path='/admin/detail-pesanan/:id' element={<DetailPesanan />} />
          <Route path='/admin/voucher' element={<Voucher />} />
          <Route path='/admin/tambah-voucher' element={<TambahVoucher />} />
          <Route path='/admin/sunting-voucher/:id' element={<SuntingVoucher />} />

          {/* Route Pembeli */}
          <Route path='/pembeli/katalog' element={<PembeliKatalog />} />
          <Route path='/pembeli/detail/:title' element={<DetailPesananPembeli />} />
          <Route path='/pembeli/dashboard' element={<DashboardPembeli />} />
          <Route path='/pembeli/list-pelapak' element={<Pelapak />} />
          <Route path='/pembeli/pesanan-saya' element={<PesananSaya />} />
          <Route path='/pembeli/voucher-saya' element={<VoucherSaya />} />
          <Route path='/pembeli/pesanan/:title/:id' element={<FormPesanan />} />
          <Route path='/pembeli/pelapak-produk/:id' element={<DaftarProductByIdPelapak />} />

          {/* Route Pelapak */}
          <Route path='/pelapak/product-saya' element={<ProductSaya />} />
          <Route path='/pelapak/pesanan' element={<PesananPelapak />} />
          <Route path='/pelapak/detail-pesanan/:id' element={<DetailPesananPelapak />} />
          <Route path='/pelapak/tambah-produk' element={<TambahProductPelapak />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;

