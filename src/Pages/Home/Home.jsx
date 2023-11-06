import { useContext } from "react";
import Banner1 from "./Banner1";
import Footer from "./Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";
import Catagores from "../../Components/Catagores/Catagores";
import Slider from "../Slider/Slider";
import AboutUs from "../About Us/AboutUs";


const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo)
  return (
    <div>
      
      <Banner1></Banner1>
      <Catagores></Catagores>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;