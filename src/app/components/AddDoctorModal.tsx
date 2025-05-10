"use client";

import { useState } from "react";
import { Doctor } from "@/types/doctor";

interface AddDoctorModalProps {
  onClose: () => void;
  onAddDoctor: (newDoctor: Omit<Doctor, "id">) => void;
}

const AddDoctorModal: React.FC<AddDoctorModalProps> = ({
  onClose,
  onAddDoctor,
}) => {
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [clinic, setClinic] = useState("");
  const [rating, setRating] = useState("");
  const [patientCount, setPatientCount] = useState("");
  const [fee, setFee] = useState("");
  const [cashback, setCashback] = useState("");
  const [availableIn, setAvailableIn] = useState("");
  const [consultMode, setConsultMode] = useState("");
  const [languages, setLanguages] = useState("");
  const [image, setImage] = useState(""); 

  const handleSubmit = () => {
    const newDoctor: Omit<Doctor, "id"> = {
      name,
      specialization,
      qualification,
      experience: Number(experience),
      location,
      clinic,
      rating: Number(rating),
      patientCount: Number(patientCount),
      fee: Number(fee),
      cashback: Number(cashback),
      availableIn: Number(availableIn),
      consultMode: consultMode.split(",").map((mode) => mode.trim()),
      languages: languages.split(",").map((lang) => lang.trim()),
      profile_img: image,
    };
    console.log(newDoctor);
    onAddDoctor(newDoctor);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white text-gray-700 overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-bold">Add New Doctor</h2>
        <button
          onClick={onClose}
          className="text-gray-600 hover:text-red-600 text-2xl font-bold"
        >
          ×
        </button>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        <form onSubmit={(e) => e.preventDefault()}>
          {[
            { label: "Name", value: name, set: setName },
            {
              label: "Specialization",
              value: specialization,
              set: setSpecialization,
            },
            {
              label: "Qualification",
              value: qualification,
              set: setQualification,
            },
            {
              label: "Experience (years)",
              value: experience,
              set: setExperience,
            },
            { label: "Location", value: location, set: setLocation },
            { label: "Clinic", value: clinic, set: setClinic },
            { label: "Rating (1-5)", value: rating, set: setRating },
            {
              label: "Patient Count",
              value: patientCount,
              set: setPatientCount,
            },
            { label: "Fee", value: fee, set: setFee },
            { label: "Cashback", value: cashback, set: setCashback },
            {
              label: "Available In (minutes)",
              value: availableIn,
              set: setAvailableIn,
            },
            {
              label: "Consult Mode (comma separated)",
              value: consultMode,
              set: setConsultMode,
            },
            {
              label: "Languages (comma separated)",
              value: languages,
              set: setLanguages,
            },
          ].map((field, i) => (
            <div className="mb-4" key={i}>
              <label className="block mb-1 font-medium">{field.label}</label>
              <input
                type="text"
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          ))}

          <div className="mb-4">
            <label htmlFor="profileImage" className="block mb-1 font-medium">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              className="block w-full text-sm p-3 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              onChange={handleImageUpload}
            />
            {image && (
              <img
                src={image}
                alt="Preview"
                className="mt-4 h-32 w-32 object-cover rounded border"
              />
            )}
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-md"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Add Doctor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctorModal;
