import { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { AllProducts } from "./pages/AllProducts";
import { Product } from "./pages/Product";
import { AllProductsPerCategory } from "./pages/AllProductsPerCategory";
import { NewProduct } from "./pages/NewProduct";
import { NotFound } from "./pages/NotFound";
import { EditProduct } from "./pages/EditProduct";

function App() {
  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedLogged = localStorage.getItem("login");
    if (storedLogged) {
      setLogged(JSON.parse(storedLogged).logged);
      setIsAdmin(JSON.parse(storedLogged).admin);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header logged={logged} />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/login"
              element={<Login logged={logged} setLogged={setLogged} />}
            ></Route>
            <Route path="/products/:id" element={<Product />}></Route>
            <Route
              path="/products"
              element={<AllProducts isAdmin={isAdmin} />}
            ></Route>
            <Route
              path="/category/:category"
              element={<AllProductsPerCategory />}
            ></Route>
            <Route path="/new-product" element={<NewProduct />}></Route>
            <Route
              path="/edit-product/:id"
              element={<EditProduct isAdmin={isAdmin} />}
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
