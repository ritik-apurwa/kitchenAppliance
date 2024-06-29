import { Outlet } from "react-router-dom";
import Footer from "./components/Designs/Footer";
import IconBorderProgress from "./components/Designs/WhatsIcon";

const Layout = () => {
  return (
    <main className="relative overflow-hidden">
      <div className="p">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      <div className="fixed bottom-4 size-14 right-4">
        <IconBorderProgress />
      </div>
    </main>
  );
};

export default Layout;
