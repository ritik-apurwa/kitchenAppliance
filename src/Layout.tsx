import { Outlet } from "react-router-dom";
import Navbar from "./components/Designs/Navbar";
import Footer from "./components/Designs/Footer";

const Layout = () => {
  return (
    <main>
      <div className=" bg-white sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div><Footer/></div>
    </main>
  );
};

export default Layout;
