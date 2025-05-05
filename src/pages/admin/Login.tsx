import React from "react";

const adminLogin: React.FC = () => {
  return (
    <html data-theme="light">
      <div className="font-poppins hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">KosKos | Admin</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Username</label>
                <input type="email" className="input" placeholder="Username" />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn bg-[#0062FF] mt-2 text-white font-poppins">
                  Login
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </html>
  );
};

export default adminLogin;
