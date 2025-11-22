import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Checkout from "./pages/CheckOut";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
