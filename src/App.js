import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import ProductListPage from "./pages/ProductListPage"
import ProductDetailsPage from "./pages/ProductDetailsPage"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>

      <Header></Header>
      <div className="container mx-auto p-4">

        <Routes>
          <Route path="/" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
