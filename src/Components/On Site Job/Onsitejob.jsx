import { useEffect, useState } from "react";
import OnSitesDetails from "./OnSitesDetails";

const Onsitejob = () => {
  const [remote, setremote] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/remote')
    .then(res=>res.json())
    .then(data=>setremote(data))
},[])

  return (


    <div className="grid grid-cols-3 gap-4">
      {
        remote.map((remote) => <OnSitesDetails key={remote._id} jobs={remote}></OnSitesDetails>)
      }
    </div>
  );
};

export default Onsitejob;