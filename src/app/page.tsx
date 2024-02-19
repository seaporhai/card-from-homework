"use client";
import React, { useState } from "react";
import { Card } from "@/components/Card/Card";
import { AddForm } from "@/components";
import Image from "next/image";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    img: null,
  });

  const handleSubmit = (data: { name: string; img: string | null }) => {
    setFormData(data);
  };

  const removeProfile = () => {
    setFormData({ name: "", img: null });
  };

  return (
    <div className="flex justify-center items-center border-2 ">
      <AddForm onSubmit={handleSubmit} />
      {formData.name && formData.img && (
        <Card name={formData.name} img={formData.img}></Card>
      )}
      {formData.name && formData.img && (
        <button
          onClick={removeProfile}
          className="bg-red-400 text-white rounded-md w-[150px] hover:bg-red-700 "
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default Page;
