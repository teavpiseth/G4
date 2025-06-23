import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmartphoneLanding from "./lesson/V0-test/Card-v";

import AboutUs from "./pages/about";
import MasterLayoutWeb from "./layout/MasterLayoutWeb";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard";
import ProductList from "./pages/dashboard/product/ProductList";
import MasterLayoutDashboard from "./layout/MasterLayoutDashboard";
import Login from "./pages/dashboard/login";

function About() {
  return (
    <>
      <h1>Welcome About page</h1>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/login" element={<Login />} />
          <Route path="/dashboard" element={<MasterLayoutDashboard />}>
            <Route path="/dashboard/product/list" element={<ProductList />} />
          </Route>

          <Route path="/" element={<MasterLayoutWeb />}>
            <Route
              index
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <AboutUs />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <h1>Welcome Contact page</h1>
                </>
              }
            />
            <Route path="/profile" element={<SmartphoneLanding />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
