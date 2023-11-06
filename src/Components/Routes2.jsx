const Routes2 = ({ site }) => {
  const {
    name,
    jobTitle,
    jobPostingDate,
    jobCategories,
    applicationDeadline,
    salaryRange,
    jobApplicantsNumber,
    _id,
  } = site;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl items-center">
        <div className="card-body">
          <p className="card-title">Name:{name} </p>
          <p>job title: {jobTitle}</p>
          <p>Job Posting Date:{jobPostingDate} </p>
          <p>Job Categories:{jobCategories} </p>
          <p>application Deadline:{applicationDeadline} </p>
          <p>Salary Range:{salaryRange} </p>
          <p>Job Applicants Number:{jobApplicantsNumber} </p>
          <p>Id:{_id} </p>
          <div className="card-actions justify-center gap-5">
            <button className="btn btn-primary ">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes2;
