import React from "react";
import ListCard from "./ListCard";

const ObjectWithIdAsKey = ({ profiles }) => {
  return (
    <>
      <h2>Profiles</h2>
      <div className="profiles-card">
        {profiles.map((profile) => (
          <ListCard data={profile} key={profile.id} />
        ))}
      </div>
    </>
  );
};

export default ObjectWithIdAsKey;
