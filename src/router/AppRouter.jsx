import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import MainLayout from "../components/layout/MainLayout";
import BlogDetail from "../pages/BlogDetail";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Services = lazy(() => import("../pages/Services"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Quotes = lazy(() => import("../pages/Quotes"));
const Financing = lazy(() => import("../pages/Financing"));
const GivingBack = lazy(() => import("../pages/GivingBack"));
const Login = lazy(() => import("../pages/Login"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
// const BlogDetail = lazy(() => import("../pages/BlogDetail"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Main layout with all public pages inside */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="quotes" element={<Quotes />} />
          <Route path="financing" element={<Financing />} />
          <Route path="giving-back" element={<GivingBack />} />
          <Route path="blog/:blogId" element={<BlogDetail  />} />
        </Route>

        {/* Public routes without MainLayout */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        {/* Catch all */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
