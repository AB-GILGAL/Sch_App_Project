import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { convertBase64 } from "../services/convertBase64";
import Navbar from "../components/Navbar";

const AddSchool = () => {
  const [baseImage, setBaseImage] = useState("");
  const [state, setState] = useState({
    name: "",
    description: "",
    level: "",
    type: "",
    noOfStd: "",
    location: "",
    contact: "",
  });
  const [imageUploading, setImageUploading] = useState(false);
  const router = useRouter();

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        ...state,
        imageUrl: baseImage,
      };
      setImageUploading(true);
      await axios.post("/api/schools", data);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setImageUploading(false);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="max-w-3xl mx-auto p-10">
        <h1 className="text-center text-3xl font-semibold italic">
          Add School
        </h1>
        <div>
          <form
            action=""
            method="post"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="mt-10">
              <label htmlFor="name" className="block text-2xl mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="border border-slate-400 w-full text-xl p-1 text-gray-600 outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="mt-10">
              <label htmlFor="name" className="block text-2xl mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                cols="30"
                rows="10"
                className="border border-slate-400 w-full text-xl p-1 text-gray-600 outline-none"
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label htmlFor="level" className="block text-2xl mb-1">
                Level
              </label>
              <select
                name="level"
                id="level"
                className="border border-slate-400 w-full text-xl p-1 text-gray-600  outline-none"
                onChange={handleChange}
              >
                <option value="">School Level</option>
                <option value="Primary">Primary</option>
                <option value="S.H.S">S.H.S</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-2xl mb-1">
                Type
              </label>
              <select
                name="type"
                id="type"
                className="border border-slate-400 w-full text-xl p-1 text-gray-600  outline-none"
                onChange={handleChange}
              >
                <option value="">School Type</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div className="mt-10">
              <label htmlFor="noOfStd" className="block text-2xl mb-1">
                No. of Students
              </label>
              <input
                type="number"
                name="noOfStd"
                id="number"
                className="border border-slate-400 w-full text-xl p-1 text-gray-600 outline-none"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="location" className="block text-2xl mb-1">
                Location
              </label>
              <select
                name="location"
                id="location"
                className="border border-slate-400 w-full text-xl p-1 text-gray-600  outline-none"
                onChange={handleChange}
              >
                <option value="">Region</option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="Northern">Northern</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Western">Western</option>
                <option value="Volta">Volta</option>
                <option value="Eastern">Eastern</option>
                <option value="Upper West">Upper West</option>
                <option value="Upper East">Upper East</option>
                <option value="Central">Central</option>
                <option value="Bono East">Bono East</option>
                <option value="Savanna">Savanna</option>
                <option value="North-East">North-East</option>v
                <option value="Oti">Oti</option>
                <option value="Western North ">Western North</option>
                <option value="Ahafo">Ahafo</option>
                <option value="Bono">Bono</option>
              </select>
            </div>
            <div className="mt-10">
              <label htmlFor="contact" className="block text-2xl mb-1">
                Contact
              </label>
              <input
                type="tel"
                name="contact"
                id="tel"
                className="border border-slate-400 w-full text-xl p-1 text-gray-600 outline-none"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="file" className="block text-2xl mb-1">
                School Image
              </label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => uploadImage(e)}
              />
            </div>
            <div>
              <button type="submit" disabled={imageUploading}>
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSchool;
