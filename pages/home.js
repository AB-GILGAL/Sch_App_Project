import axios from "axios";
import { useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { useSchoolContext } from "../context/schoolContext";
import { SearchIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const { filteredSchools, setFilteredSchools, setSchools } =
    useSchoolContext();

  useEffect(() => {
    const getSchools = async () => {
      const res = await axios.get("http://localhost:3000/api/schools");
      setSchools(res.data.schools);
      setFilteredSchools(res.data.schools);
    };

    getSchools();
  }, []);

  if (filteredSchools.length === 0) {
    return (
      <>
        <Navbar />
        <div className="text-gray-400 h-[calc(100vh_-_74px)] flex items-center justify-center flex-col">
          <SearchIcon className="w-20" />
          <h3 className="text-3xl text-gray-400">No School Found</h3>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto py-10">
        <div className="flex flex-wrap gap-10">
          {filteredSchools.map((school, index) => (
            <Card key={index} school={school} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
}
