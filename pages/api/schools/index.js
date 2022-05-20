import { dbConnect } from "../../../libs/dbConnect";
import School from "../../../models/school.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body } = req;

  if (req.method === "GET") {
    const schools = await School.find({});
    res.status(200).json({ schools });
  } else if (method === "POST") {
    const school = await School.create(body);
    res.status(201).json({ school });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
