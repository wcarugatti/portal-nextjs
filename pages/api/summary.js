import { connectToDatabase } from "../../util/mongodb";


export default async function handler(req, res) {

  const { db } = await connectToDatabase();

  const summary_res = await db
    .collection("summary_tb")
    .find({})
    .sort({ _id: -1 })
    .limit(1)
    .toArray();

  let summary;
  
  try {
    summary = summary_res[0].data;
  } catch (error) {
    console.log(error)
    summary = []
  }

  res.status(200).json(summary)
}