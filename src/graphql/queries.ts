import { getAccessToken } from "@/squidex/accessToken";
import { gql } from "@apollo/client";
import getApolloClient from "./apollo-client";

const query = async (query: any, variables: any) => {
    try {
        const token = await getAccessToken();
        const client = getApolloClient(token);
        const { data } = await client.query({
          query,
          variables,
        });
        return data;
      } catch (error) {
        console.error('Error executing query:', error);
        throw new Error('Failed to execute query');
      }
    };

export const getServicesData = async () => {
  const data = await query(
    gql`
      query getServices {
        queryServicesContents {
          id
          data {
            title {
              iv
            }
            description {
              iv
            }
          }
        }
      }
    `, {}
  );
  return data?.queryServicesContents
};
