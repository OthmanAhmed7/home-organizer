import PlanForm from "@/components/sections/PlanForm";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-[4rem] font-[600] mt-[2rem]">Create a Plan</h1>
      <PlanForm />
    </div>
  );
};

export default page;
