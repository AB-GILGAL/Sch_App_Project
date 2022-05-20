import { dbConnect } from "../../../../libs/dbConnect";
import School from "../../../../models/school.model";
import User from "../../../../models/user.model";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  await dbConnect();
  const { method, query } = req;

  const session = await getSession({ req });
  if (!session) {
    return res
      .status(401)
      .json({ error: "You must log in to review a school" });
  }

  if (method === "GET") {
    let school = await School.findById(query.schoolId);
    if (!school) {
      return res.status(404).json({ error: "School Not Found." });
    }

    const schoolReviewByUser = school.reviews.includes(session.user.id);
    if (schoolReviewByUser) {
      school = await School.findByIdAndUpdate(
        query.schoolId,
        {
          $pull: {
            reviews: session.user.id,
          },
        },
        {
          new: true,
        }
      );
    } else {
      school = await School.findByIdAndUpdate(
        query.schoolId,
        {
          $push: {
            reviews: session.user.id,
          },
        },
        {
          new: true,
        }
      );
    }
    res.status(200).json({ school });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
