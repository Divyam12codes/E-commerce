import './App.css';
import { useState,useEffect, useContext } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Shop from './Shop';
import Sale from './Sale';
import Customer from './Customer';
import ProductDetails from './ProductDetails';
import Store from './Store';
import Login from './Login';
import CartWrapper from './CartWrapper';
import { CartProvider } from './CartContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from './SearchContext';
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <>
      <CartProvider>
        <SearchProvider>
          <div className="flex flex-col min-h-screen">
            <BrowserRouter>
                <Header user={user} setUser={setUser}/>
                <CartWrapper />
                <main className='flex-grow'>
                <Routes>
                  <Route path="/" element={<Home />} /> 
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/sale" element={<Sale />} />
                  <Route path="/customer" element={<Customer />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/login" element={<Login setUser={setUser} />} />
                </Routes>
                </main>
            </BrowserRouter>
            <Footer/>
          </div>
        </SearchProvider>
      </CartProvider>
    </>
  );
}

export default App;
