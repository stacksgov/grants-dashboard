import { databaseConnect } from '../../../lib/database-connect'

export default async (req, res) => {
  const { db } = await databaseConnect();
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const grants = await db.collection("grants").find({}).toArray();
        res.status(200).json({ success: true, data: grants })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        console.log(req.body, "req.body");
        await db.collection("test").insertOne(req.body).then((grant)=>{
          res.status(201).json({ success: true, data: grant })
        }).catch((error) => {
          console.log(error, 'error')
          res.status(400).json({ success: false })
        });
      } catch (error) {
        console.log(error, 'error 1');
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
