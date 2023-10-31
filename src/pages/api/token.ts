import { NextApiRequest, NextApiResponse } from "next";
import { getStoreToken } from "@/squidex/accessToken";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = await getStoreToken();
    res.status(200).json({ accessToken: token, message: "Token obtained." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to obtain access token." });
  }
};

export default handler;
