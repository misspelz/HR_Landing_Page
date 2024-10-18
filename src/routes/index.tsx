import NotFound from "@pages/notFound";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("@pages/home"));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
