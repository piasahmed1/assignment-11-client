import { useEffect, useState } from "react";
import PartTimeJobDetails from "./PartTimeJobDetails";

const PartTime = () => {
  const [remote, setremote] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/remote')
    .then(res=>res.json())
    .then(data=>setremote(data))
},[])




  return (


    <div className="grid grid-cols-3 gap-4">
      {
        remote.map((remote) => <PartTimeJobDetails key={remote._id} jobs={remote}></PartTimeJobDetails>)
      }
    </div>
  );
};

export default PartTime;