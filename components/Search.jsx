import React from "react";
import { useSchoolContext } from "../context/schoolContext";
import { SearchIcon } from "@heroicons/react/outline";

const Search = () => {
  const { searchSchool } = useSchoolContext();

  return (
    <div className="flex items-center border rounded-full px-2 py-1 border-r">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search School..."
        className="outline-none pl-2 text-base"
        onChange={(e) => searchSchool(e.target.value)}
      />
      <SearchIcon className="w-4" />
    </div>
  );
};

export default Search;
