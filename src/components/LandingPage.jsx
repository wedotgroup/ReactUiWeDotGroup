import { OurPartener } from "../sections/OurPartener"
import Footer from "./Footer"
import HeroSection from "./HomeSection"
import Navbar from "./Navbar"
import Aboutus from "../sections/Aboutus";
import WhyChoose from "../sections/WhyChoose";
import ItConsultancy from "../sections/ItConsultancy";
import TechSatck from "../sections/TechSatck";
import Enquiry from "../sections/Enquiry";
import TopBar from "./TopBar";
import ManagementConsaltancy from "../sections/ManagementConsaltancy";
import HrConsaltancy from "../sections/HrConsaltancy";

export const LandingPage = () => {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <HeroSection/>
    
    <Aboutus/>
    <WhyChoose/>
    <ItConsultancy/>
    <ManagementConsaltancy/>
    <HrConsaltancy/>
    <Enquiry/>
    <OurPartener/>
    <Footer/>
    </>
  )
}
