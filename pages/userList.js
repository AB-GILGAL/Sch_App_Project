import axios from "axios";
import { useEffect } from "react";
import Userlist from "../components/Userlist";
import Navbar from "../components/Navbar";
import { useUserContext } from "../context/userContext";
import { SearchIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

export default function UserList() {
  const { data: session } = useSession();
  const { filteredUsers, setFilteredUsers, setUsers } = useUserContext();

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:3000/api/users");
      setUsers(res.data.users);
      setFilteredUsers(res.data.userss);
    };

    getUsers();
  }, []);

  if (filteredUsers.length === 0) {
    return (
      <>
        <Navbar />
        <div className="text-gray-400 h-[calc(100vh_-_74px)] flex items-center justify-center flex-col">
          <SearchIcon className="w-20" />
          <h3 className="text-3xl text-gray-400">No user Found</h3>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-5xl mx-auto py-10">
        <div className="flex flex-wrap gap-10">
          {filteredUsers.map((user, index) => (
            <Userlist key={index} user={user} session={session} />
          ))}
        </div>
      </div>
    </div>
  );
}
