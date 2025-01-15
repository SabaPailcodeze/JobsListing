import React from "react";
import JobsData from "../../../../public/JobsData/JobsData.json";
import JobsCard from "../../Molecules/JobsCard/JobsCard";

const Main = () => {
  return (
    <main className="bg-[#EFFAFA]">
      <div className="container mx-auto flex flex-col gap-10 lg:gap-6 py-20 px-auto lg:px-40">
        {JobsData.map((job) => (
          <JobsCard key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
};

export default Main;

// გასაწერია რესპონსივი, ფონტი დასამატებელი.
