import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Designs/Home';
import About from './components/Designs/About';
import { UserProfile } from './components/Designs/UserProfile';



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="user/:userId" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}