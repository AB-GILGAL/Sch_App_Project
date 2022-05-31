import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { convertBase64 } from "../services/convertBase64";

const SignUp = () => {
  const [baseImage, setBaseImage] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
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
      console.log(data);
      setImageUploading(true);
      await axios.post("http://localhost:3000/api/auth/register", data);
      router.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setImageUploading(false);
    }
  };
  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover flex justify-items-end"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHNjaG9vbCUyMGNvbXBvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400",
      }}
    >
      <div className="max-w-3xl mx-auto p-10">
        <h1 className="text-center text-3xl text-white font-semibold italic">
          Register
        </h1>
        <div className="border p-10 rounded-lg bg-gradient-to-r from-gray-400 to-transparent">
          <form
            action=""
            method="post"
            className="space-y-4 "
            onSubmit={handleSubmit}
          >
            <div className="mt-10">
              <label
                htmlFor="username"
                className="block text-2xl text-white mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="username"
                id="username"
                className="border border-slate-400  w-full rounded-lg text-xl p-1 outline-none"
                onChange={handleChange}
              />
            </div>
            <div className="mt-10">
              <label htmlFor="email" className="block text-2xl text-white mb-1">
                Email
              </label>
              <input
                name="email"
                id="email"
                className="border border-slate-400 w-full rounded-lg text-xl p-1 outline-none"
                placeholder="example@email.com"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-2xl text-white mb-1"
              >
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="border border-slate-400 w-full rounded-lg text-xl p-1 outline-none"
                placeholder="Enter your Password"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-2xl text-white mb-1"
              >
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                className="border border-slate-400 w-full rounded-lg text-xl p-1 outline-none"
                placeholder="Confirm Password"
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <label htmlFor="role" className="block text-2xl text-white mb-1">
                Role
              </label>
              <select
                name="role"
                id="role"
                className="border border-slate-400 w-full rounded-lg text-xl p-1  outline-none"
                onChange={handleChange}
              >
                <option value="">Role</option>
                <option value="School Owner">School Owner</option>
                <option value="School Administrator">
                  School Administrator
                </option>
                <option value="Parent">Parent</option>
                <option value="Visitor">Visitor</option>
              </select>
            </div>
            <div className="mt-10">
              <label
                htmlFor="contact"
                className="block text-2xl text-white mb-1"
              >
                Contact
              </label>
              <input
                type="tel"
                name="contact"
                id="tel"
                className="border border-slate-400 w-full rounded-lg text-xl p-1 outline-none"
                placeholder="0290000000"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="file" className="block text-2xl text-white mb-1">
                Profile Picture
              </label>
              <input
                type="file"
                name="file"
                id="file"
                onChange={(e) => uploadImage(e)}
              />
            </div>
            <p className="text-white">
              By creating an account you agree to our{" "}
              <a className="text-red-600 font-bold" href="#">
                Terms & Privacy.
              </a>
            </p>
            <div className="bg-green-400 rounded-full px-1 py-1">
              <button
                type="submit"
                disabled={imageUploading}
                className="text-center text-lg font-bold"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
