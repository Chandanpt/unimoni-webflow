import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import createApolloClient from "@/graphql/apollo-client";
import { getAccessToken } from "@/squidex/accessToken";
import { useEffect, useState } from "react";
import getApolloClient from "@/graphql/apollo-client";

const fetchApolloClient = async () => {
  const token = await getAccessToken();
  return getApolloClient(token);
};

export default function App({ Component, pageProps }: AppProps) {
  const [apolloClient, setApolloClient] = useState(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
    });
  });

  useEffect(() => {
    fetchApolloClient()
      .then((response) => setApolloClient(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
