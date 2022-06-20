import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (session) {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(401).json({ name: "Error Unauthorized" });
  }
}
