import { IS_SERVER } from "@/utils";


interface TokenData {
  access_token: string;
  expires_in: number;
}

const getAccessToken = async (): Promise<TokenData> => {
  const clientId = "unimoni-app:default";
  const clientSecret = "xwcuelvutxmhmpjvc0zsd804tdubyme15aslxlo8rfmx";
  const scope = "squidex-api";

  const formData = new URLSearchParams();
  formData.append("grant_type", "client_credentials");
  formData.append("client_id", clientId);
  formData.append("client_secret", clientSecret);
  formData.append("scope", scope);

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
      console.log("Token is still valid:", storedToken, storedExpirationTime);
      return storedToken;
    }
  }

  try {
    await getAccessToken();
  } catch (error) {
    console.log(error, "error");
    throw new Error("Failed");
  }
};
