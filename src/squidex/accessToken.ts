import { IS_SERVER } from "@/utils";

interface TokenData {
  access_token: string;
  expires_in: number;
}

export const getAccessToken = async () => {
  const clientId = "unimoni-app:default";
  const clientSecret = "xwcuelvutxmhmpjvc0zsd804tdubyme15aslxlo8rfmx";
  const scope = "squidex-api";

  const formData = new URLSearchParams({
    grant_type: process.env.NEXT_PUBLIC_GRANT_TYPE || "",
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID || "",
    client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET || "",
    scope: process.env.NEXT_PUBLIC_SCOPE || "",
  });
  // formData.append("grant_type", process.env.NEXT_PUBLIC_GRANT_TYPE || "");
  // formData.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID || "");
  // formData.append("client_secret", process.env.NEXT_PUBLIC_CLIENT_SECRET || "");
  // formData.append("scope", process.env.NEXT_PUBLIC_SCOPE || "");

  try {
    const tokenResponse = await fetch(
      "https://cloud.squidex.io/identity-server/connect/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      }
    );

    const tokenData = await tokenResponse.json();

    if (IS_SERVER) {
      process.env.ACCESS_TOKEN = tokenData.access_token;
      process.env.EXPIRATION_TIME = new Date(
        Date.now() + Number(tokenData.expires_in) * 1000
      ).toString();
    }

    if (!IS_SERVER) {
      const newExpirationTime = new Date(
        Date.now() + Number(tokenData.expires_in) * 1000
      ).toString();
      localStorage.setItem("accessToken", tokenData.access_token);
      localStorage.setItem("expirationTime", newExpirationTime);
    }

    return tokenData;
  } catch (error) {
    console.error("Error fetching access token:", error);
    throw new Error("Failed to obtain access token");
  }
};

export const getStoreToken = async () => {
  const storedToken = IS_SERVER
    ? process.env.ACCESS_TOKEN
    : localStorage.getItem("accessToken");
  const storedExpirationTime = IS_SERVER
    ? process.env.EXPIRATION_TIME
    : localStorage.getItem("expirationTime");

  if (storedToken && storedExpirationTime) {
    const expirationTime = new Date(storedExpirationTime);

    if (expirationTime > new Date()) {
      return storedToken;
    }
  }

  try {
    await getAccessToken();
  } catch (error) {
    throw new Error("Failed");
  }
};
