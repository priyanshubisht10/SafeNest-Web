import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound";
import Login from "./features/login/Login";
import Home from "./pages/Home";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>);
}
