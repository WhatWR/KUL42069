import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(req, res) {
  const { db } = await connectToDatabase()

  const people = await db
    .collection('people')
    .find({})
    .toArray()

  res.json(people)
}
