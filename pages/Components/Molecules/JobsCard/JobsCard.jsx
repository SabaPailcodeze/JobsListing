import FilterElems from "../../Atoms/FilterElems/FilterElems";
import JobInfo from "../../Atoms/JobInfo/JobInfo";

const JobsCard = ({ job }) => {
  return (
    <div
      className={`${
        job.featured ? "border-l-[#5CA5A5] border-l-[5px]" : ""
      } md:flex items-center justify-between rounded-[5px] px-10 py-8 lg:flex-row bg-white relative shadow-custom`}
    >
      <JobInfo job={job} />
      <FilterElems job={job} />
    </div>
  );
};

export default JobsCard;
