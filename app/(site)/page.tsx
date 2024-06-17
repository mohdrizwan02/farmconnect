import About from "../components/About";
import Carousel from "../components/Home-carousel";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services";
import Contact from "../components/Contact";
import LoginSignupheader from "../components/LoginSignupheader";
export default function Home() {
  return (
    <>
    
    <LoginSignupheader />
     <Carousel/>  
     <Services/>
     <About/>
     <Contact/>
     <Newsletter/>
    
    </>
  );
}