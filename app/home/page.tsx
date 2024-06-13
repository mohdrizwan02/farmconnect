import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Carousel from "../components/Home-carousel";
import LoginSignupheader from "../components/LoginSignupheader";
import Newsletter from "../components/Newsletter";
import Services from "../components/Services.tsx";
export default function Home() {
  return (
    <>
    <LoginSignupheader/>
     <Header/>
     <Carousel/>  
     <About/>
     <Services/>
    <Newsletter/>
    <Footer/>
    </>
  );
}
