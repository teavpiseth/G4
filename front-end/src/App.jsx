import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmartphoneLanding from "./lesson/V0-test/Card-v";
import HeaderComponent from "./components/Header";
import Product from "./components/Product";

function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
    </>
  );
}

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
          <Route
            path="/"
            element={
              <>
                <HeaderComponent>
                  <h1>Welcome Home</h1>
                </HeaderComponent>
                <Product />
              </>
            }
          />
          <Route path="/about" element={<h1>Welcome About page</h1>} />
          <Route path="/contact" element={<h1>Welcome Contact page</h1>} />
          <Route path="/profile" element={<SmartphoneLanding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
