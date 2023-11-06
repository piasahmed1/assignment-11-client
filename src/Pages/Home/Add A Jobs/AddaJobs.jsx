
const AddaJobs = () => {
  const handleProducts = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const category = form.category.value;
    const url = form.url.value;

    const newProduct = { name, brand, price, description, rating, category, url}
    console.log(newProduct);
    
    // send data to the server

    fetch('http://localhost:5000/remote', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    } )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Product Added Successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })

  }

  return (
    <div className="bg-[#F4F3F0]  p-24">
      <h2 className="text-5xl font-extrabold text-center font-bold mb-8">Add a Jobs</h2>
      <form onSubmit={handleProducts}>
        {/* form row */}

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Title</span>
            </label>
            <label className="input-group">
              <input type="text" name="name" placeholder="Job Title" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Job Category</span>
            </label>
            <label className="input-group">
              <input type="category" name="brand" placeholder="Job Category" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form price and short description */}

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Picture Url</span>
            </label>
            <label className="input-group">
              <input type="text" name="price" placeholder="Picture Url" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <label className="input-group">
              <input type="text" name="description" placeholder="Salary Range" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form ratings and image */}

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Job Description</span>
            </label>
            <label className="input-group">
              <input type="text" name="rating" placeholder="Job Description" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Job Posting Date</span>
            </label>
            <label className="input-group">
              <input type="text" name="category" placeholder="Job Posting Date" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        {/* form catagory and details */}

        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4 ">
            <label className="label">
              <span className="label-text">Application Deadline</span>
            </label>
            <label className="input-group">
              <input type="date" name="url" placeholder="Application Deadline" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Job Applicants Number</span>
            </label>
            <label className="input-group">
              <input type="number" name="url" placeholder="Job Applicants Number" className="input input-bordered w-full" />
            </label>
          </div>
        </div>
        <button className="md:w-1/2 ml-4"></button>
        <input type="submit" value="Add Jobs" className="btn btn-block bg-gray-950 text-white" />

      </form>
    </div>
  );
};

export default AddaJobs;