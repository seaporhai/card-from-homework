"use client";
import React, { useState } from "react";
import { Card } from "@/components/Card/Card";
import { AddForm } from "@/components"; // Assuming Add component is not needed here
import Image from "next/image";
import { Modal } from "@/components";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    img: null,
  });

  const handleSubmit = (data: { name: string; img: string | null }) => {
    setFormData(data); // Update formData with the data received from the form
  };

  return (
    <div className="flex justify-center items-center">
      <AddForm onSubmit={handleSubmit} />{" "}
      {/* Pass handleSubmit function to AddForm */}
      {formData.name && formData.img && (
        <Card name={formData.name} img={formData.img}></Card>
      )}
  
    </div>
  );
};

export default Page;
