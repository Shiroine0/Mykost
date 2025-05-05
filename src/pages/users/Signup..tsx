import React from "react";
import { Link } from "react-router-dom";

const UserSignUp: React.FC = () => {
  return (
    <div
      data-theme="light"
      className="font-poppins hero bg-base-200 min-h-screen"
    >
      <div className="hero-content flex-col w-full px-4">
        <div className="text-center mb-6">
          <p className="text-5xl font-bold">KosKos | Sign Up</p>
        </div>

        <div className="card bg-base-100 w-full max-w-3xl min-h-[500px] shadow-2xl">
          <div className="card-body w-full">
            <fieldset className="fieldset space-y-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                <div className="flex flex-col space-y-2">
                  <label className="fieldset-label">Full Name</label>
                  <input
                    type="text"
                    className="input w-full"
                    placeholder="Your full name"
                  />

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

                  <label className="fieldset-label">Confirm Password</label>
                  <input
                    type="password"
                    className="input w-full"
                    placeholder="Repeat your password"
                  />

                  <button className="btn bg-[#0062FF] mt-4 text-white font-poppins w-full hover:bg-[#0051cc]">
                    Create Account
                  </button>
                </div>

                <div className="flex flex-col justify-center space-y-4">
                  <p className="text-sm text-center text-gray-600 font-medium font-poppins mt-4">
                    Already have an account?{" "}
                    <Link
                      to="/user"
                      className="text-blue-600 hover:underline font-poppins font-medium"
                    >
                      Login now
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

export default UserSignUp;
