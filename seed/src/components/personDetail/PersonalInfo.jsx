import React from "react";
import { motion } from "framer-motion";

const PersonalInfo = ({
  name,
  biography,
  profilePath,
  knownCredits,
  knownForDepartment,
  gender,
  birthday,
  placeOfBirth,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col md:flex-row bg-gray-800 text-white rounded-lg p-6 shadow-lg"
    >
      {/* Left Section: Profile Image and Basic Information */}
      <div className="md:mr-24">
        {profilePath && (
          <img
            src={`https://image.tmdb.org/t/p/w500${profilePath}`}
            alt={`${name} Profile`}
            width={250}
            height={375}
            className="mb-4 rounded-lg"
          />
        )}
        <h2 className="text-red-400 text-xl mb-4">Personal Info</h2>
        <div className="mb-4">
          <h2>Known For</h2>
          <p className="text-gray-300">{knownForDepartment}</p>
        </div>
        <div className="mb-4">
          <h2>Known Credits</h2>
          <p className="text-gray-300">{knownCredits}</p>
        </div>
        <div className="mb-4">
          <h2>Gender</h2>
          <p className="text-gray-300">{gender}</p>
        </div>
        <div className="mb-4">
          <h2>Birthday</h2>
          <p className="text-gray-300">{birthday}</p>
        </div>
        <div className="mb-4">
          <h2>Place of Birth</h2>
          <p className="text-gray-300">{placeOfBirth}</p>
        </div>
      </div>

      {/* Right Section: Name and Biography */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-6">{name}</h1>
        <div className="mb-4">
          <h2 className="text-red-400 text-xl font-bold mb-4">Biography</h2>
          <p className="font-extralight">{biography}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
