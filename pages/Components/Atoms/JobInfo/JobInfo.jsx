import React from "react";

const JobInfo = ({ job }) => {
  return (
    <>
      <div className="flex gap-6 relative ">
        <img
          src={job.logo}
          alt={job.company}
          // className=" w-12 h-12  md:w-[88px] md:h-[88px]"
          className=" absolute bottom-[120px] w-12 h-12 md:static md:w-[88px] md:h-[88px]"
        />
        <div>
          <div className="flex gap-8 items-center pb-3">
            <span className="text-[13px] md:text-[18px] font-bold text-[#5CA5A5] leading-6">
              {job.company}
            </span>
            <div className="flex gap-2">
              {job.new && (
                <span className="font-bold bg-[#5CA5A5] rounded-xl text-white px-2 pt-[2px]">
                  NEW!
                </span>
              )}
              {job.featured && (
                <span className="font-bold bg-[#2B3939] rounded-xl text-white px-2 pt-[2px]">
                  FEATURED
                </span>
              )}
            </div>
          </div>
          <p className="text-[#2B3939] hover:text-[#5CA5A5] font-bold md:text-[22px] leading-6 cursor-pointer">
            {job.position}
          </p>
          <div className="text-[#7C8F8F] flex gap-9 pb-4 pt-3 md:pb-0 leading-6 text-[18px]">
            <span className="circle relative">{job.postedAt}</span>
            <span className="circle relative">{job.contract}</span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInfo;
