import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import Master from "./components/Master";
import SplashScreen from "./components/SplashScreen";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HrConsultancy from "./pages/HrConsultancy";

import ManageConsultancy from "./pages/manage-consultancy/ManageConsultancy";
import ItConsultancy from "./pages/it-consultancy/ItConsultancy";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return (
      <SplashScreen
        onFinish={() => setShowSplash(false)}
      />
    );
  }
  
  return (
    <Routes>

      {/* Home */}
      <Route
        path="/"
        element={<LandingPage />}
      />

      {/* Main Layout */}
      <Route element={<Master />}>

        <Route
          path="/about"
          element={<AboutUs />}
        />

        <Route
          path="/contact"
          element={<ContactUs />}
        />

        <Route
          path="/hr-consultancy"
          element={<HrConsultancy />}
        />

       

        <Route
          path="/management-consultancy/:slug"
          element={<ManageConsultancy />}
        />

        

        <Route
          path="/it-consultancy/:slug"
          element={<ItConsultancy />}
        />

      </Route>

    </Routes>
  );
}
export default App;