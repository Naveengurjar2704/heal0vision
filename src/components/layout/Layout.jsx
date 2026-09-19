import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import VisionAssistant from "../chatbot/VisionAssistant";

export default function Layout() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <VisionAssistant />
    </div>
  );
}
