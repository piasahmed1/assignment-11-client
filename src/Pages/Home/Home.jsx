import { useContext } from "react";
import Banner1 from "./Banner1";
import Footer from "./Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";
import Catagores from "../../Components/Catagores/Catagores";


const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo)
  return (
    <div>
      
      <Banner1></Banner1>
      <Catagores></Catagores>
      <Footer></Footer>
    </div>
  );
};

export default Home;