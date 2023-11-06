import { useEffect, useState } from "react";
import Routes2 from "../../../Components/Routes2";

const AllJobs = () => {
  const [alljobs, setalljobs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setalljobs(data));
  }, []);

  const filteredonsite = alljobs.filter((job) =>
    job.jobCategories.toLowerCase().includes(searchInput.toLowerCase())
  );
  return (
    <div className="container mx-auto">
      <div className="flex  justify-center items-center my-10">
        <input
          type="search"
          placeholder="search job Categories"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-5">
        {
  filteredonsite.map((jobs2)=><Routes2 key={jobs2._id} site={jobs2}></Routes2>)

        }
        
      </div>
    </div>
  );
};

export default AllJobs;
