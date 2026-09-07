import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import Master from "./components/Master";
import SplashScreen from "./components/SplashScreen";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import HrConsultancy from "./pages/HrConsultancy";
import PrivecyPolice from "./pages/footers/PrivacyPolice";
import ManageConsultancy from "./pages/manage-consultancy/ManageConsultancy";
import ItConsultancy from "./pages/it-consultancy/ItConsultancy";
import TermCondition from "./pages/footers/TermCondition";
import RFCPolicy from "./pages/footers/RFCPolicy";
import ServiceDeliveryPolicy from "./pages/footers/ServiceDeliveryPolicy";
import PaymentPolicy from "./pages/footers/PaymentPolicy";
import Disclaimer from "./pages/footers/Disclaimer";
import ManagementCounsultancy from "./pages/footers/ManagementCounsultancy";


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
        <Route path="/privacy-policy" element={<PrivecyPolice/>}/>
        <Route path="/terms-conditions" element={<TermCondition/>}/>
        <Route path="/refund-cancellation-policy" element={<RFCPolicy/>}/>
        <Route path="/service-delivery-policy" element={<ServiceDeliveryPolicy/>}/>
        <Route path="/payment-policy" element={<PaymentPolicy/>}/>
        <Route path="/disclaimer" element={<Disclaimer/>}/>
        <Route path="/management-consultancy" element={<ManagementCounsultancy/>}/>

      </Route>

    </Routes>
  );
}
export default App;