import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from "../Layouts/AdminDashboard";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import { ToastContainer } from "react-toastify";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Redirect to login if no route matches */}
        {/* Add other routes here if needed */}

        {/* Admin Dashboard Routes */}
        <Route path="/" element={<AdminDashboard />}>
          <Route
            path="dashboard"
            element={<div className="min-h-[1600px]">Dashboard Content</div>}
          />
          <Route path="doctors" element={<div>Doctors Content</div>} />
          <Route path="patients" element={<div>Patients Content</div>} />
          <Route
            path="appointments"
            element={<div>Appointments Content</div>}
          />
          <Route path="pharmacy" element={<div>Pharmacy Content</div>} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default AppRoutes;
