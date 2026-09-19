import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Insurance from "./pages/Insurance";
import Procedures from "./pages/Procedures";
import ProcedureDetail from "./pages/ProcedureDetail";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="procedures" element={<Procedures />} />
        <Route path="procedures/:slug" element={<ProcedureDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
