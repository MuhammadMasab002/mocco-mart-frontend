import React, { useEffect, useState } from "react";
import CustomButton from "../components/common/CustomButton";
import CustomFormInput from "../components/common/inputs/CustomFormInput";
import { useLoginUserMutation } from "../services/api";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../services/store/slices/authSlice";
import { useDispatch } from "react-redux";
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [triggerLoginUser] = useLoginUserMutation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      console.error("Please fill in all fields");
      return;
    }
    try {
      const user = await triggerLoginUser({
        email: formData.email,
        password: formData.password,
      }).unwrap();

      if (user) {
        localStorage.setItem("isLoggedInUser", JSON.stringify(true));
      }

      // Reset form
      setFormData({
        email: "",
        password: "",
      });

      navigate("/");
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left Image (Hidden on Mobile) */}
        <div
          className="hidden lg:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center py-10 px-6">
          <div className="w-full max-w-md">
            <h2 className="text-4xl font-bold text-left text-black mb-8">
              Login to Mocco Mart.
            </h2>

            <p className="text-left text-black mb-6">
              Enter your details below
            </p>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 text-black"
            >
              <CustomFormInput
                type={"email"}
                placeholder={"Email or Phone Number"}
                name="email"
                icon={false}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <CustomFormInput
                type="password"
                placeholder="Password"
                name="password"
                icon={false}
                value={formData.password}
                onChange={handleChange}
                required
              />

              <CustomButton
                buttonText={"Login"}
                type="submit"
                variant={"danger"}
              />
              <CustomButton
                buttonText={"Forget Password?"}
                type="submit"
                variant={"textDanger"}
                onClick={() => alert("Forget Password successfully")}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
