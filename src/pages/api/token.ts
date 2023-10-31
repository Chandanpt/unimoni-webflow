import { NextApiRequest, NextApiResponse } from "next";
import { getStoreToken } from "@/squidex/accessToken";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = await getStoreToken();
    res.status(200).json({ accessToken: token, message: "Token obtained." });
    console.log("true");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to obtain access token." });
    console.log("false");
  }
};

export default handler;
