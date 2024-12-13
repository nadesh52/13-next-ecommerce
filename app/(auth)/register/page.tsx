import React from "react";

const RegisterPage = () => {
  return (
    <section className="flex h-full w-full items-center justify-center">
      <div className="m-auto mt-20 w-72 rounded-lg bg-base-200 p-4">
        <div className="flex w-full flex-col items-center gap-6">
          <div className="w-40">
            <img src="/assets/images/toypotlogo.png" />
          </div>
          <a href="/login" className="btn-link text-xs">
            back to sign in
          </a>
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
              <div className="mt-2 w-full text-center text-xs">
                By signing up, you agree to our terms of service and privacy
                policy. No credit card required.
              </div>
              <div className="mt-4">
                <button className="btn btn-primary w-full">SIGN UP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
