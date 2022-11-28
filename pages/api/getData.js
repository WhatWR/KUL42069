import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()

  const hospital = await db
    .collection('hospital')
    .find({})
    .toArray()

  res.json(hospital)
}
