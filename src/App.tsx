import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Price from './pages/Try/Try'
import About from './pages/About/About';
import Header from './components/Header/Header'
import { Footer } from './components/Footer/index';
import Layout from './components/Layout';

function App() {
  
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/try" element={<Price />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
