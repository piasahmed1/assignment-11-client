
import Onsitejob from "../On Site Job/Onsitejob";
import Hybrid from "../Hybrid/Hybrid";
import RemoteJob from "../Remote Job/RemoteJob";
import PartTime from "../Part Time/PartTime";
import { useState } from "react";



const Catagores = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
// const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  }

  
  return (
    <div>
      <div className='my-20'>
      <div>
        <p className='text-5xl font-bold text-center py-10'>Job Categories</p>
      </div>
      <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>

        {/* All Jobs */}
        <div onClick={() => handleCategoryClick('parttime Jobs')} className='border p-5 rounded-xl mx-auto'>
          <img className='rounded-xl' src="URL_HERE" alt="" />
          <p className='text-3xl font-bold text-center'>PART-TIME JOBS</p>
        </div>

        {/* Remote Job */}
        <div onClick={() => handleCategoryClick('Remote Job')} className='border p-5 rounded-xl mx-auto'>
          <img className='rounded-xl' src="URL_HERE" alt="" />
          <p className='text-3xl font-bold text-center'>REMOTE JOB</p>
        </div>

        {/* Hybrid Job */}
        <div onClick={() => handleCategoryClick('Hybrid Job')} className='border p-5 rounded-xl mx-auto'>
          <img className='rounded-xl' src="URL_HERE" alt="" />
          <p className='text-3xl font-bold text-center'>HYBRID JOBS</p>
        </div>

        {/* Others Jobs */}
        <div onClick={() => handleCategoryClick('onsite Jobs')} className='border p-5 rounded-xl mx-auto'>
          <img className='rounded-xl' src="URL_HERE" alt="" />
          <p className='text-3xl font-bold text-center'>ONSITES JOBS</p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-4 my-10'>
        {selectedCategory === 'parttime Jobs' && <PartTime></PartTime> }
        {selectedCategory === 'Remote Job' && <RemoteJob></RemoteJob>}
        {selectedCategory === 'Hybrid Job' && <Hybrid></Hybrid>}
        {selectedCategory === 'onsite Jobs' && <Onsitejob></Onsitejob>}
        {/* Add similar conditions for other categories */}
      </div>
    </div>
    </div>
  );
};

export default Catagores;