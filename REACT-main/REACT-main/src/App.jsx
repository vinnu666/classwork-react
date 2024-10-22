import React, { useState } from "react";
import ObjectWithIdAsKey from "./assets/components/FormInputs/ObjectWithIdAsKey";
import ProfileForm from "./assets/components/FormInputs/ProfileForm";

const App = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "Alice", age: 28, occupation: "Engineer" },
    { id: 2, name: "Bob", age: 30, occupation: "Doctor" },
    { id: 3, name: "Charlie", age: 25, occupation: "Artist" },
  ]); // Initial profiles
  const [user, setUser] = useState(null); // State to store the logged-in user
  const [loginFormData, setLoginFormData] = useState({
    name: "",
    occupation: "",
  });

  // Handler to add a new profile to the array
  const addProfile = (newProfile) => {
    const updatedProfile = { ...newProfile, id: profiles.length + 1 };
    setProfiles([...profiles, updatedProfile]);
  };

  // Handle login input change
  const handleLoginChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Check if the login details match an existing profile
    const loggedInUser = profiles.find(
      (profile) =>
        profile.name === loginFormData.name &&
        profile.occupation === loginFormData.occupation
    );

    if (loggedInUser) {
      setUser(loggedInUser); // Set the logged-in user if details match
      setLoginFormData({ name: "", occupation: "" }); // Clear the form
    } else {
      alert("Invalid login credentials!");
    }
  };

  return (
    <div className="app">
      <h1>Profile and Login Management</h1>

      {/* Login Form */}
      {!user ? (
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              name="name"
              value={loginFormData.name}
              onChange={handleLoginChange}
              placeholder="Name"
              required
            />
            <input
              type="text"
              name="occupation"
              value={loginFormData.occupation}
              onChange={handleLoginChange}
              placeholder="Occupation"
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Welcome, {user.name}</h2> {/* Display the logged-in user's name */}
          <button onClick={() => setUser(null)}>Logout</button> {/* Logout button */}
        </div>
      )}

      {/* Profile Form */}
      <div className="profile-form">
        <h2>Add a New Profile</h2>
        <ProfileForm addProfile={addProfile} />
      </div>

      {/* Render the ObjectWithIdAsKey component */}
      <div className="profile-list">
        <ObjectWithIdAsKey profiles={profiles} />
      </div>
    </div>
  );
};

export default App;
