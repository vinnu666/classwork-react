import React, { useState } from "react";

const ProfileForm = ({ addProfile }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.age && formData.occupation) {
      addProfile(formData); // Add the profile via parent component
      setFormData({ name: "", age: "", occupation: "" }); // Reset the form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        placeholder="Occupation"
        required
      />
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default ProfileForm;
