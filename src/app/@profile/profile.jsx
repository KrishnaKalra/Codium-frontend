"use client";
import { useState } from "react";
import { User,MapPin, GraduationCap, CheckSquare, Edit, Save, X, Plus, Trash2, Mail, Linkedin, Github, Globe, Twitter } from "lucide-react";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Durgesh Bhatt",
    location: "India",
    education: "IIIT Bhubaneswar",
    skills: ["C", "C++", "Java"],
  });
  const [editData, setEditData] = useState({ ...profileData });

  const handleEdit = () => {
    setEditData({ ...profileData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setProfileData({ ...editData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...profileData });
    setIsEditing(false);
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...editData.skills];
    newSkills[index] = value;
    setEditData({ ...editData, skills: newSkills });
  };

  const addSkill = () => {
    setEditData({ ...editData, skills: [...editData.skills, ""] });
  };

  const removeSkill = (index) => {
    const newSkills = editData.skills.filter((_, i) => i !== index);
    setEditData({ ...editData, skills: newSkills });
  };

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      {/* Header with Profile Image */}
      <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-6 flex-shrink-0">
        {/* Profile Image - Much Larger */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User  className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 text-black" />
            </div>
            {/* Verified Badge and Edit Button */}
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <CheckSquare className="w-4 h-4 text-white" />
            </div>
            {!isEditing && (
              <button
                onClick={handleEdit}
                className="absolute -bottom-1 -left-1 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full transition-all duration-200 flex items-center justify-center border-2 border-white"
                aria-label="Edit profile"
              >
                <Edit className="w-4 h-4 text-black" />
              </button>
            )}
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          {!isEditing ? (
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 break-words">
              {profileData.name}
            </h2>
          ) : (
            <input
              type="text"
              value={editData.name}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
              }
              className="w-full text-center text-xl sm:text-2xl md:text-3xl font-bold text-white bg-transparent border-b-2 border-white border-opacity-50 placeholder-white placeholder-opacity-70 focus:outline-none focus:border-opacity-100 mb-2"
              placeholder="Enter name"
            />
          )}
        </div>

        {/* Save/Cancel Buttons - Only show when editing */}
        {isEditing && (
          <div className="flex justify-center mt-4 gap-2">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2"
              aria-label="Save"
            >
              <Save className="w-4 h-4" />
              <span className="text-sm font-medium">Save</span>
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-200 flex items-center gap-2"
              aria-label="Cancel"
            >
              <X className="w-4 h-4" />
              <span className="text-sm font-medium">Cancel</span>
            </button>
          </div>
        )}
      </div>

      {/* Body - Scrollable */}
      <div className="flex-1 p-4 sm:p-6 space-y-4 sm:space-y-6 overflow-y-auto">
        {/* Location */}
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0" />
          {!isEditing ? (
            <p className="text-gray-700 font-medium text-sm sm:text-base break-words">
              {profileData.location}
            </p>
          ) : (
            <input
              type="text"
              value={editData.location}
              onChange={(e) =>
                setEditData({ ...editData, location: e.target.value })
              }
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
              placeholder="Enter location"
            />
          )}
        </div>

        {/* Education */}
        <div className="flex items-center gap-3">
          <GraduationCap className="w-5 h-5 text-indigo-500 flex-shrink-0" />
          {!isEditing ? (
            <p className="text-gray-700 font-medium text-sm sm:text-base break-words">
              {profileData.education}
            </p>
          ) : (
            <input
              type="text"
              value={editData.education}
              onChange={(e) =>
                setEditData({ ...editData, education: e.target.value })
              }
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm sm:text-base"
              placeholder="Enter education"
            />
          )}
        </div>

        {/* Skills */}
        <div className="space-y-3">
          <div className="ml-0">
            {!isEditing ? (
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-2">
                  <CheckSquare className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">Skills</span>
                </div>
                <div className="ml-8">
                  {editData.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 mb-2">
                      <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
                        placeholder="Enter skill"
                      />
                      <button
                        onClick={() => removeSkill(index)}
                        className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-50 transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={addSkill}
                    className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center gap-1 hover:bg-indigo-50 px-2 py-1 rounded-lg transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    Add Skill
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-center gap-3 flex-wrap sm:flex-nowrap">
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-indigo-500 hover:bg-indigo-50 rounded-full transition-all duration-200 hover:scale-110"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200 hover:scale-110"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-full transition-all duration-200 hover:scale-110"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200 hover:scale-110"
              title="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-600 hover:text-black hover:bg-gray-50 rounded-full transition-all duration-200 hover:scale-110"
              title="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}