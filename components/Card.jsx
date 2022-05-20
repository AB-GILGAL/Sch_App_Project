import { StarIcon } from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useSchoolContext } from "../context/schoolContext";

const Card = ({ school, session }) => {
  const { addSchool } = useSchoolContext();
  const router = useRouter();
  const review = async () => {
    if (!session) {
      alert("Please kingly login before you can review a school.");
      router.push("/login");
    }

    const res = await axios.get(
      `http://localhost:3000/api/schools/${school._id}/review`
    );
    addSchool(res.data.school);
  };

  return (
    <div className="w-72 shadow-md rounded-md hover">
      <div className="relative h-52">
        <Image src={school.imageUrl} layout="fill" />
      </div>
      <div className="px-3 py-5 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-gray-500 font-semibold italic">
            {school.name}
          </h3>
          <div className="flex items-center space-x-2">
            {session && school.reviews.includes(session.user.id) ? (
              <StarIconSolid
                onClick={() => review()}
                className="w-5 right-0 text-red-500 cursor-pointer"
              />
            ) : (
              <StarIcon
                onClick={() => review()}
                className="w-5 right-0 text-red-500 cursor-pointer"
              />
            )}
            <span>{school.reviews.length}</span>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-600">
            <span className="w-20 inline-block font-bold">Location:</span> Cape
            Coast
          </p>
          <p className="text-lg text-gray-600">
            <span className="w-20 inline-block font-bold">Contact:</span> 030
            123 4567
          </p>
        </div>
        <div>
          <button className="w-full bg-slate-400 text-white rounded-full py-1.5 font-semibold">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
