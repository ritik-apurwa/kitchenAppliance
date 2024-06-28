import { Outlet } from "react-router-dom";
import Navbar from "./components/Designs/Navbar";
import Footer from "./components/Designs/Footer";
import IconBorderProgress from "./components/Designs/WhatsIcon";

const Layout = () => {
  return (
    <main className="relative">
      <div className=" bg-white sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
     <div className="fixed bottom-4 size-12 right-4">
     <IconBorderProgress/>
     </div>
    </main>
  );
};

export default Layout;
