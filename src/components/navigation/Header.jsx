import React, { useState } from "react";
import CustomFormInput from "../common/inputs/CustomFormInput";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SearchIcon from "@mui/icons-material/Search";
import { Menu } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import CustomButton from "../common/CustomButton";
import { useLogoutUserMutation } from "../../services/api";

const Header = () => {
  const isLoggedInUser = localStorage.getItem("isLoggedInUser");

  // const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [triggerOutoutUser] = useLogoutUserMutation();

  const handleLogout = () => {
    try {
      const logoutRes = triggerOutoutUser().unwrap();
      if (logoutRes) {
        localStorage.removeItem("isLoggedInUser");
      }
    } catch (error) {
      console.log("error to logout user: ", error);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <header className="w-full sticky top-0 bg-white shadow-md py-4 sm:px-8 z-[9999]">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* <div>
          <button
            className="md:hidden fixed top-20 left-0 z-[9999] bg-gray-900 text-white p-2 rounde"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </div> */}
        <h1 className="text-xl font-bold text-gray-800">
          <Link to="/" className="w-10 h-10 hover:text-blue-600">
            <img
              className="w-fullmax- w-48"
              src="../mocco-large-logo.png"
              alt=""
            />
            {/* <img
              className="w-fullmax- w-16"
              src="../mocco-small-logo.png"
              alt=""
            /> */}
            {/* Mocco Mart */}
            {/* <span className="text-xl font-bold text-red-400 rounded-2xl">.</span> */}
          </Link>
        </h1>

        <nav className="space-x-6 text-gray-700 font-medium hidden lg:block">
          <NavLink to="/" end className="hover:text-blue-600">
            Home
          </NavLink>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/signup" className="hover:text-blue-600">
            SignUp
          </Link>
        </nav>
        <div className="flex justify-between items-center text-black">
          <div className="hidden md:block">
            <CustomFormInput
              placeholder="What are you looking for?"
              name="search"
              value={search}
              icon={true}
              onChange={handleChange}
              required
            />
          </div>
          <SearchIcon className="text-gray-500 text-xl md:invisible" />
          {/* {user?.role === "admin" && (
            <Link to="/admin" className="mr-0">
              <CustomButton
                buttonText={"Admin Panel"}
                variant={"danger"}
                className={"text-sm"}
              />
            </Link>
          )} */}
          <div className="flex justify-between items-center gap-3 pl-4">
            <Link to="/wishlist">
              <FavoriteBorderIcon
                className="rounded-full bg-gray-100 hover:text-red-600 cursor-pointer p-1"
                fontSize="large"
              />
            </Link>
            <Link to="/cart">
              <ShoppingCartIcon
                className="rounded-full bg-gray-100 hover:text-red-600 cursor-pointer p-1"
                fontSize="large"
              />
            </Link>
            {isLoggedInUser && (
              <>
                <Link to="/my-profile">
                  <PersonOutlineIcon
                    className="rounded-full bg-red-100 text-red-600 cursor-pointer p-1"
                    fontSize="large"
                  />
                </Link>

                <Link to="/login">
                  <LogoutRoundedIcon
                    className="rounded-full bg-red-100 text-red-600 cursor-pointer p-1"
                    fontSize="large"
                    onClick={handleLogout}
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
