import React from "react";
import CustomButton from "../components/common/CustomButton";
import CustomFormInput from "../components/common/inputs/CustomFormInput";

const SignUp = () => {
  return (
    <>
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT IMAGE (Hidden on mobile) */}
        <div
          className="hidden lg:block bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop')",
          }}
        ></div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center py-10 px-6">
          <div className="w-full max-w-md">
            {/* Headings */}
            <h2 className="text-4xl font-bold text-left  text-black mb-8">
              Create an Account
            </h2>

            <p className="text-left text-black mb-6">
              Enter your details below
            </p>
            {/* FORM */}
            <form className="flex flex-col gap-5 text-black">
              <CustomFormInput
                type={"name"}
                placeholder={"Name"}
                name="name"
                icon={false}
                //   value={name}
                //   onChange={handleChange}
                required
              />
              <CustomFormInput
                type={"email"}
                placeholder={"Email or Phone Number"}
                name="email"
                icon={false}
                //   value={email}
                //   onChange={handleChange}
                required
              />
              <CustomFormInput
                type="password"
                placeholder="Password"
                name="password"
                icon={false}
                //   value={password}
                //   onChange={handleChange}
                required
              />

              <CustomButton
                buttonText={"Login"}
                type="submit"
                variant={"danger"}
                onClick={() => alert("signUp successfully")}
              />
              <CustomButton
                buttonText={"Login with Google"}
                type="submit"
                variant={"secondary"}
                onClick={() => alert("login with google successfully")}
              />
               <div className="flex justify-center items-center gap-2 mt-4">
                <p className="text-center text-gray-600">
                  Already have an account?
                </p>
                <div>
                  <CustomButton
                    buttonText={"Login"}
                    type="submit"
                    variant={"textDanger"}
                    className="!py-0 !px-1"
                    onClick={() => alert("login page route successfully")}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
