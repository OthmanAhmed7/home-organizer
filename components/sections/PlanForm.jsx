"use client";

import { maids, chores } from "@/lib/data";
import React, { useState, useContext } from "react";

const PlanForm = () => {
  const { updateFormData } = useContext(FormContext);
  const [formData, setFormData] = useState({
    where: "",
    who: "",
    what: "",
    when: "",
    frequency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(formData);
  };

  return (
    <div className="mt-[2rem]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-[1rem]">
        <div className="flex flex-col">
          <label className="text-[1rem] font-[600]">Where</label>
          <input
            type="text"
            value={formData.where}
            onChange={handleChange}
            placeholder="Ahmed's Room"
            className="border-b border-black outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[1rem] font-[600]">Who</label>
          <select
            value={formData.who}
            onChange={handleChange}
            className="border-b border-black outline-none"
          >
            <option value="">Select an option</option>
            {maids.map((maid) => (
              <option value={maid.name}>{maid.name}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[1rem] font-[600]">what</label>
          <select
            value={formData.what}
            onChange={handleChange}
            className="border-b border-black outline-none"
          >
            <option value="">Select an option</option>
            {chores.map((chore) => (
              <option value={chore.type}>{chore.type}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[1rem] font-[600]">When</label>
          <input
            value={formData.when}
            onChange={handleChange}
            type="date"
            className="border-b border-black outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[1rem] font-[600]">Frequency</label>
          <select
            value={formData.frequency}
            onChange={handleChange}
            className="border-b border-black outline-none"
          >
            <option value="">Select an option</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <button
          type="submit"
          className="py-[.7rem] mt-[1rem] bg-black text-white font-[600]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PlanForm;
