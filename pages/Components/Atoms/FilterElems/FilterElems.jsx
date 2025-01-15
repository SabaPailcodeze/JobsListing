import React from "react";

const FilterElems = ({ job }) => {
  return (
    <>
      <div className="flex gap-4  font-bold">
        <button className="bg-[#E6FBFB] text-[#5CA5A5] px-[10px] pt-[5px] pb-[3px] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white duration-200 ease-in">
          <span>{job.role}</span>
        </button>
        <button className="bg-[#E6FBFB] text-[#5CA5A5] px-[10px] pt-[5px] pb-[3px] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white duration-200 ease-in">
          <span>{job.level}</span>
        </button>
        {job.languages?.map((lang, index) => (
          <button
            key={index}
            className="bg-[#E6FBFB] text-[#5CA5A5] px-[10px] pt-[5px] pb-[3px] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white duration-200 ease-in"
          >
            <span>{lang}</span>
          </button>
        ))}
        {job.tools?.map((tool, i) => (
          <button
            key={i}
            className="bg-[#E6FBFB] text-[#5CA5A5] px-[10px] pt-[5px] pb-[3px] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white duration-200 ease-in"
          >
            <span>{tool}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default FilterElems;
