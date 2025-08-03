import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LoginUser } from "../features/user/actions/userThunks";
import { useForm } from "react-hook-form";
import Button from "../components/common/items/Button";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const SigninHandler = (user) => {
    dispatch(LoginUser(user));
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[url('/images/excavator-bg.jpg')] bg-cover bg-center relative overflow-hidden">
      <div className="flex w-full max-w-6xl bg-black/40 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative text-white">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-yellow-500 rounded-full mr-3"></div>
              <h1 className="text-4xl font-extrabold tracking-tight">Dirt Dogs</h1>
            </div>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Excavation <br /> Excellence
            </h2>
            <p className="text-white/90 text-lg">
              Login to access your dashboard and manage your excavation projects.
            </p>
          </div>

          <div className="absolute bottom-10 right-0 w-48 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100 20 C120 30, 140 50, 140 80 L140 120 C140 140, 130 160, 100 180 C70 160, 60 140, 60 120 L60 80 C60 50, 80 30, 100 20 Z"
                fill="white"
                opacity="0.6"
              />
              <circle cx="100" cy="40" r="15" fill="white" opacity="0.8" />
            </svg>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 bg-white/10 backdrop-blur">
          <div className="max-w-md mx-auto">
            <h2 className="text-white text-3xl font-bold mb-6">Welcome Back</h2>
            <form onSubmit={handleSubmit(SigninHandler)} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  {...register("email")}
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  {...register("password")}
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 bg-white/10 border-white/20 rounded focus:ring-2 focus:ring-yellow-400"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-white/80">
                  I agree to the
                  <a href="#" className="ml-1 text-yellow-400 underline">
                    Terms of Service
                  </a>
                </label>
              </div>

              <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold">
                Sign In
              </Button>
            </form>

            <p className="text-white/60 text-center mt-6">
              Return to
              <Link to="/" className="ml-1 text-yellow-400 hover:text-yellow-300 underline">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
