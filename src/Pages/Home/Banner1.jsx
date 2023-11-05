import banner from '../../assets/Banner.jpg'


const Banner1 = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <img className='w-full' src={banner} alt="" />
<div className='text-center'>
<h1 className='text-white font-bold text-6xl'>Search/find your First Job <br /> Explore More</h1>
      <br />
      <p className='font-bold text-red-400'>I do not have personal experiences or a first job as I am a computer program created by OpenAI. <br /> My purpose is to provide information and assist with tasks to the best of my abilities. Please feel free to ask any questions.</p>
      <br />
      <div className='flex gap-5 justify-center items-center'>
      <input className='w-1/2 text-orange-700' type="search" name="Search Here" id="search" />
      <button className='btn btn-primary'>Search</button>
      </div>
</div>
    </div>
  );
};

export default Banner1;