import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Checkout from "./pages/CheckOut";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Wishlist from "./pages/WishList";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/my-profile" element={<MyProfile />} />

          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
