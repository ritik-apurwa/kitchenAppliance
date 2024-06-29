import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Designs/Home";
import About from "./components/Designs/About";
import { UserProfile } from "./components/Designs/UserProfile";
import ServiceDetail from "./components/Designs/ServiceDetails";

export default function App() {
  return (
   <section className="">
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="user/:userId" element={<UserProfile />} />
      </Route>
    </Routes>
   </section>
  );
}
