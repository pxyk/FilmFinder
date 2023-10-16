import React from "react";

const PersonalInfo = ({ name, biography, profilePath, knownCredits, knownForDepartment, gender, birthday, placeOfBirth }) => {
  return (
    <div>
      <h1>{name}</h1>
      {profilePath && (
        <img
          src={`https://image.tmdb.org/t/p/w500${profilePath}`}
          alt={`${name} Profile`}
          width={250}
          height={375}
        />
      )}
      <div>
        <h2>Known For</h2>
        <p>{knownForDepartment}</p>
      </div>
      <div>
        <h2>Known Credits</h2>
        <p>{knownCredits}</p>
      </div>
      <div>
        <h2>Gender</h2>
        <p>{gender}</p>
      </div>
      <div>
        <h2>Birthday</h2>
        <p>{birthday}</p>
      </div>
      <div>
        <h2>Place of Birth</h2>
        <p>{placeOfBirth}</p>
      </div>
      <div>
        <h2>Bio</h2>
        <p>{biography}</p>
      </div>
      {/* Display other person details as needed */}
    </div>
  );
};

export default PersonalInfo;
