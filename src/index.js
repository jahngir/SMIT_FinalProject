import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
import Home from "./App";
import Admin from "./pages/admin/admin";
import Feeds from "./pages/feeds/feeds";
import Login from "./pages/loginsignup/login";
import Course from "./pages/courses/course";
import Form from "./pages/form/form";
import Signup from "./pages/loginsignup/signup";
import { AuthProvider } from "./pages/loginsignup/auth";
import StdDashboard from "./pages/student/dashboard";
import AdminlogIn from "./pages/admin/adminlogin";





export default function App() {
  return (
   
    <div>
 <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="admin" element={<Admin />} />
          <Route path="dashboard" element={<StdDashboard />} />
          <Route path="feeds" element={<Feeds />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="course" element={<Course />} />
          <Route path="form" element={<Form />} />
          <Route path="adminlogin" element={<AdminlogIn />} />

          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    <div>
      <h4>Click On Show Posts to see Posts By Saylani Mass Training</h4>

    </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);