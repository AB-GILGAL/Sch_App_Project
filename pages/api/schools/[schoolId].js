import { dbConnect } from "../../../libs/dbConnect";
import School from "../../../models/school.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body, query } = req;

  const getSchoolById = async (schoolId) => {
    const school = await School.findById(schoolId);
    if (!school) {
      return res.status(404).json({ error: "School Not Found" });
    }
    return school;
  };

  if (method === "GET") {
    const school = await getSchoolById(query.schoolId);
    res.status(200).json({ school });
  } else if (method === "PATCH") {
    let school = await getSchoolById(query.schoolId);
    school = await School.findByIdAndUpdate(query.schoolId, body, {
      new: true,
    });
    res.status(201).json({ school });
  }
  if (method === "DELETE") {
    await getSchoolById(query.schoolId);
    await School.findOneAndDelete(query.schoolId);
    res.status(200).json({ msg: "School Deleted Successfully." });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
