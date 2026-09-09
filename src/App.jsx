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
import ItCounsultancyfooter from "./pages/footers/ItCounsultancyfooter"
import Certifications from "./pages/Certifications";

import ISOCertifications from "./pages/certifications/ISOCertifications";
import ESGCertification from "./pages/certifications/ESGCertification";
import FSSAI from "./pages/certifications/FSSAI";
import ISICertification from "./pages/certifications/ISICertification";
import SocialLabourCompliance from "./pages/certifications/SocialLabourCompliance";
import TrademarkRegistration from "./pages/certifications/TrademarkRegistration";



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
        <Route path="/itconsultancy" element={<ItCounsultancyfooter/>}/>
        <Route path="/certifications" element={<Certifications/>}/>

        
          <Route path="/certifications/iso-certifications" element={<ISOCertifications/>}/>
            <Route path="/certifications/trademark-registration" element={<TrademarkRegistration/>}/>
              <Route path="/certifications/fssai" element={<FSSAI/>}/>
                <Route path="/certifications/isi-certification" element={<ISICertification/>}/>
                  <Route path="/certifications/esg-certification" element={<ESGCertification/>}/>
                    <Route path="/certifications/social-labour-compliance" element={<SocialLabourCompliance/>}/>

      </Route>

    </Routes>
  );
}
export default App;