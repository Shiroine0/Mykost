import React from "react";
import { Link } from "react-router-dom";

const UserLogin: React.FC = () => {
  return (
    <div
      data-theme="light"
      className="font-poppins hero bg-base-200 min-h-screen"
    >
      <div className="hero-content flex-col w-full px-4">
        <div className="text-center mb-6">
          <p className="text-5xl font-bold">KosKos | Login</p>
        </div>

        <div className="card bg-base-100 w-full max-w-3xl min-h-[500px] shadow-2xl">
          <div className="card-body w-full">
            <fieldset className="fieldset space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    className="input w-full"
                    placeholder="Email"
                  />

                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Password"
                  />

                  <button className="btn bg-[#0062FF] mt-2 text-white font-poppins w-full hover:bg-[#0051cc]">
                    Login
                  </button>

                  <Link
                    to=""
                    className="text-blue-600 mt-1 text-right link link-hover font-poppins font-semibold"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <div className="mb-3 mt-2 flex items-center">
                    <hr className="flex-grow border-t border-gray-300" />
                    <span className="mx-4 text-gray-500">or</span>
                    <hr className="flex-grow border-t border-gray-300" />
                  </div>

                  <button
                    type="button"
                    className="flex items-center justify-center transition duration-200 border border-gray-200 text-gray-500 py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal w-full"
                  >
                    <img
                      className="size-6 mx-3"
                      src="Google-Logo-Photoroom.png"
                      alt="Google sign in"
                    />
                    <span>Sign In with Google</span>
                  </button>

                  <p className="text-sm text-center text-gray-600 font-medium font-poppins mt-4">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-600 hover:underline font-poppins font-medium"
                    >
                      Sign up now
                    </Link>
                  </p>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
