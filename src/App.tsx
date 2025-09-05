import { Routes, Route, BrowserRouter } from 'react-router-dom';


import Home from './pages/Home';
import Shop from './pages/Shop';
import Deals from './pages/Deals';
import Support from './pages/Support';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Layout from './components/Layout';

export default function App() {
  return (
    <BrowserRouter>
     
          <Routes>
            <Route path='/' element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/support" element={<Support />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
          </Routes>
        
     
    </BrowserRouter>

  );
}
