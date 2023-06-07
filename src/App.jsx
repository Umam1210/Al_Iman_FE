
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/HomePage';
import Layout from './components/layout/Layout';
import DetailHomePage from './pages/DetailHomePage';
import AdminHomePage from './pages/AdminHomePage';
import DetailProduct from './components/admin/DetailProduct';
import SuntingProduct from './components/admin/SuntingProduct';
import Dashboard from './components/admin/Dashboard';
import ListPengguna from './components/admin/ListPengguna';
import TambahPengguna from './components/admin/TambahPengguna';
import SuntingPengguna from './components/admin/SuntingPengguna';
import Product from './components/admin/Product';
import TambahProduct from './components/admin/TambahProduct';
import Pesanan from './components/admin/Pesanan';
import DetailPesanan from './components/admin/DetailPesanan';
import Voucher from './components/admin/Voucher';
import TambahVoucher from './components/admin/TambahVoucher';
import SuntingVoucher from './components/admin/SuntingVoucher';
import PembeliKatalog from './pages/PembeliKatalog';

function App() {

  return (
    <>
      <Layout>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/detail/:title' element={<DetailHomePage />} />
          {/*Route Admin */}
          <Route path='/admin/katalog' element={<AdminHomePage />} />
          <Route path='/admin/detail/:title' element={<DetailProduct />} />
          <Route path='/admin/sunting/:title/:id' element={<SuntingProduct />} />
          <Route path='/admin/tambah-product' element={<TambahProduct />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/list-pengguna' element={<ListPengguna />} />
          <Route path='/admin/tambah-pengguna' element={<TambahPengguna />} />
          <Route path='/admin/sunting-pengguna/:id' element={<SuntingPengguna />} />
          <Route path='/admin/products' element={<Product />} />
          <Route path='/admin/pesanan' element={<Pesanan />}
          />
          <Route path='/admin/detail-pesanan/:id' element={<DetailPesanan />} />
          <Route path='/admin/voucher' element={<Voucher />} />
          <Route path='/admin/tambah-voucher' element={<TambahVoucher />} />
          <Route path='/admin/sunting-voucher/:id' element={<SuntingVoucher />} />

          {/* Route Pembeli */}
          <Route path='/pembeli/katalog' element={<PembeliKatalog />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
