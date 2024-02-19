// FormComponent.tsx
import React, { FormEvent, useState } from "react";

interface FormData {
  name: string;
  img: string | null;
}

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const AddForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [data, setData] = useState<FormData>({
    name: "",
    // id: "",
    // name: "No Image",
    img: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({
          ...data,
          img: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(data); // Pass form data to the parent component
  };
  // const removeProfile = (idToRemove: any) => {
  //   setProfiles((prevProfiles: any[]) =>
  //     prevProfiles.filter((profile) => profile.id !== idToRemove)
  //   );
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="text-black mb-[20px] rounded-md"
            type="text"
            id="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="img">Image:</label>
          <input
            className="text-black mb-[20px] rounded-md"
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
          />
          {/* {data.img && (
            <img
              src={data.img}
              alt="Selected"
              height={100}
              width={100}
              style={{ marginTop: "10px" }}
            />
          )} */}
        </div>

        <button type="submit" className="bg-[#97ca97] w-[200px] rounded-md hover:bg-[green]">
          Create Card
        </button>
      </form>
      {/* <button
        onClick={removeProfile}
        className="bg-[red] text-[white]
        w-[200px]
        rounded-md
      "
      >
        {" "}
        delete
      </button> */}
    </div>
  );
};

export { AddForm };
function setProfiles(arg0: (prevProfiles: any[]) => any[]) {
  throw new Error("Function not implemented.");
}
