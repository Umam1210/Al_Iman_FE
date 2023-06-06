
import { Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';
import DetailHomePage from './pages/DetailHomePage';

function App() {

  return (
    <Layout>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/detail' element={<DetailHomePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
