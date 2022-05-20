import { createContext, useState, useContext, useEffect } from "react";

const SchoolContext = createContext({
  schools: [],
  filteredSchools: [],
  setSchools: () => null,
  searchSchool: (search) => null,
  setFilteredSchools: () => null,
  addSchool: (school) => null,
});

export const SchoolContextProvider = ({ children }) => {
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);

  const searchSchool = (search) => {
    const matchedSchool = schools.filter((school) =>
      school.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSchools(matchedSchool);
  };

  const addSchool = (school) => {
    const newSchool = schools.map((sch) => {
      if (sch._id === school._id) return school;
      return sch;
    });
    setSchools(newSchool);
  };

  useEffect(() => {
    setFilteredSchools(schools);
  }, [schools]);

  return (
    <SchoolContext.Provider
      value={{
        filteredSchools,
        setFilteredSchools,
        setSchools,
        searchSchool,
        addSchool,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};

export const useSchoolContext = () => useContext(SchoolContext);
