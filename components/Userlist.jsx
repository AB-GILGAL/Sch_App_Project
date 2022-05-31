import Image from "next/image";
import Link from "next/link";
import React from "react";

const Userlist = ({ user }) => {
  return (
    <div className="shadow-lg basis-80  bg-white rounded overflow-hidden">
      <div className="relative h-52">
        <Image src={user.imageUrl} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-center text-2xl text-gray-700">
          {user.username}
        </h3>
        <p className="text-center truncate ... mt-3 mb-4 text-gray-700">
          {user.role}
        </p>
        <div className="flex justify-center">
          <Link href={`/${user._id}`}>
            <button className="bg-teal-500 px-5 py-2 text-white font-bold hover:bg-teal-700 transition-all duration-150">
              Read More...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Userlist;
