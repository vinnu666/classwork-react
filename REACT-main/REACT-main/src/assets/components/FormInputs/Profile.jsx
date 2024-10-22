import React, { useState } from "react";
import ListCard from "./ListCard";
import ProfileForm from "./ProfileForm"; // Import the form component

const ObjectWithIdAsKey = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Alice", age: 28, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 30, occupation: "Doctor" },
    { id: 3, name: "Charlie", age: 25, occupation: "Artist" },
  ]);

  // Handler to add a new profile to the array
  const addProfile = (newProfile) => {
    // Add a unique ID to the new profile
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);
  };

  return (
    <>
      <h2>Object with ID as Key</h2>
      <ProfileForm addProfile={addProfile} />
      <div className="profiles-card">
        {profiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>
    </>
  );
};

export default ObjectWithIdAsKey;