import { dbConnect } from "../../../libs/dbConnect";
import User from "../../../models/user.model";

export default async function handler(req, res) {
  await dbConnect();
  const { method, body, query } = req;

  const getUserById = async (userId) => {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }
    return user;
  };

  if (method === "GET") {
    const user = await getUserById(query.userId);
    res.status(200).json({ user });
  } else if (method === "PATCH") {
    let user = await getUserById(query.userId);
    user = await User.findByIdAndUpdate(query.userId, body, {
      new: true,
    });
    res.status(201).json({ user });
  }
  if (method === "DELETE") {
    await getUserById(query.userId);
    await User.findOneAndDelete(query.userId);
    res.status(200).json({ msg: "User Deleted Successfully." });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
