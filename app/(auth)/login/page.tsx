import React from "react";

const Loginpage = () => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="m-auto mt-20 w-72 rounded-lg bg-base-200 p-4">
        <div className="flex w-full flex-col items-center gap-6">
          <div className="w-40">
            <img src="/assets/images/toypotlogo.png" />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <button className="btn btn-outline h-10 min-h-10 w-full justify-start">
                <img src="/assets/icons/google.svg" alt="googlelogin" />
                <p>Sign in with Google</p>
              </button>
            </div>
            <div className="divider">or</div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="your@example.com"
                className="input input-bordered h-10 min-h-10 w-full placeholder:text-gray-700"
              />
              <input
                type="text"
                placeholder="your password"
                className="input input-bordered h-10 min-h-10 w-full placeholder:text-gray-700"
              />
              <div className="text-sm">
                Don't have an account?{" "}
                <a href="/register" className="btn-link text-primary">
                  Sign up
                </a>
              </div>
              <div className="mt-4">
                <button className="btn btn-primary w-full">SIGN IN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loginpage;
