import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/settings" exact element={<Settings />} />
          <Route path="/analytics" exact element={<Analytics />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
