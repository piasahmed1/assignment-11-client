import { useLoaderData } from "react-router-dom";
import MyJobsCard from "./MyJobsCard";

const MyJobs = () => {
const data = useLoaderData();
console.log(data)




  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    {
        data.map((items) => <MyJobsCard key={data._id} items = {items}></MyJobsCard>)
      }
    </div>
    
  );
};

export default MyJobs;