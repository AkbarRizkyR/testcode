import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/HomeAbout';
import LoginPage from '@/pages/LoginPage';
import MainLayout from '@/layouts/MainLayout';
import AuthLayout from '@/layouts/AuthLayout';
import AddUser from '@/pages/TambahUser';
import EditUser from '@/pages/EditUser';
import ViewUser from '@/pages/ViewUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route path="/view/:id" element={<ViewUser />} />
          {/* Tambahkan route lain sesuai kebutuhan */}
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          {/* Tambahkan route lain sesuai kebutuhan */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;