import { StarIcon } from "@heroicons/react/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/solid";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSchoolContext } from "../context/schoolContext";
import SchoolDetail from "../pages/[schoolId]";

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
      <div className="px-3 py-5 space-y-2 bg-teal-900 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl text-white font-semibold italic">
            {school.name}
          </h3>
          <div className="flex items-center space-x-2 ">
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
          <p className="text-lg text-white">
            <span className="w-20 inline-block font-bold">Location:</span>{" "}
            {school.location}
          </p>
          <p className="text-lg text-white">
            <span className="w-20 inline-block font-bold">Contact:</span>{" "}
            {school.contact}
          </p>
        </div>
        <div>
          <Link href={`schoolId`}>
            <a className="w-full bg-white text-teal-900 rounded-full py-1.5 px-10 font-semibold">
              Read More...
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
