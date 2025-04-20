import React from "react";
import { Link } from "react-router-dom";

const mitraLogin: React.FC = () => {
  return(
    <html data-theme="light">
      <div className="font-poppins hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" />
                <button className="btn btn-neutral mt-2">Login</button>
                <Link to="" className="text-blue-600 mt-1 text-right link link-hover">
                  Forgot password?
                </Link>
                <div className="mb-3 mt-2 flex items-center">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="mx-4 text-gray-500">or</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>
                <div className="">
                  <div className="flex flex-col gap-1">
                    <button type="button" className="flex items-center justify-center transition duration-200 border border-gray-200 text-gray-500  py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal">
                      <img className="size-6 mx-3" src="Google-Logo-Photoroom.png" alt="Google sign in" />
                      <span>Sign In with Google</span>
                    </button>
                    <button type="button" className="flex items-center justify-center transition duration-200 border border-gray-200 text-gray-500  py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal">
                      <img className="size-6 mx-3" src="github-mark.png" alt="Google sign in" />
                      <span>Sign In with Github</span>
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-sm text-center text-gray-600">
                  Don't have an account?{' '}
                  <Link to="" className="text-blue-600 hover:underline font-medium">
                    Sign up
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
};

export default mitraLogin;
