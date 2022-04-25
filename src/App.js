import './App.css';
import Header from "./components/Header"
import ProductListPage from "./pages/ProductListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"
import { ProductProvider } from "./context/productContext"
import { Routes, Route } from "react-router-dom"
import React from 'react';
import { Toaster } from 'react-hot-toast';

function App() {
  
  return (
    <div>

      <ProductProvider>
        <Header ></Header>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
        </div>
      </ProductProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
