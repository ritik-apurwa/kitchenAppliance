import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Designs/Home";

import { UserProfile } from "./components/Designs/UserProfile";
import ServiceDetail from "./components/Designs/ServiceDetails";
import Contact from "./components/Designs/ContactPage";
import ProductGrid from "./components/Designs/Product";
import AboutPage from "./components/Designs/AboutPage";

export default function App() {
  return (
   <section className="pt-12">
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<ProductGrid />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="user/:userId" element={<UserProfile />} />
      </Route>
    </Routes>
   </section>
  );
}
