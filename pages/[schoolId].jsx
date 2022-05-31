import axios from "axios";
import React from "react";
import Image from "next/image";

const SchoolDetail = ({ school }) => {
  console.log(school);
  return (
    <div className="max-w-2xl mx-auto mt-5 space-y-5">
      <h3 className="font-bold italic text-2xl text-gray-700">{school.name}</h3>
      <div className="relative h-60">
        {school.imageUrl && (
          <Image src={school.imageUrl} layout="fill" objectFit="cover" />
        )}
      </div>
      <div className="p-4">
        <p className="text-justify text- mb-4 text-gray-700">
          {school.description}
        </p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const { schoolId } = ctx.query;
  const res = await axios(`http://localhost:3000/api/${schoolId}`);
  console.log(res.status);

  return {
    props: {
      school: res.data,
    },
  };
};

export default SchoolDetail;
