import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

function Login() {
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="my-12 pt-12">
      <Helmet>
        <title>Login | Your kitch</title>
      </Helmet>
      <div className="container">
        <div className="w-full max-w-lg bg-white rounded-lg mx-auto p-12">
          <h1 className="text-center text-neutral font-bold text-4xl lg:text-5xl mb-8 font-sans">
            Login
          </h1>
          <LoginForm where={[from, { replace: true }]} />
        </div>
      </div>
    </div>
  );
}

export default Login;
