import { graphQLClient } from "@/lib/graphql/client";
import { ASSESSMENT_COLLECTION } from "@/lib/graphql/queries/assessment";

export const getAssessmentCollection = async () => {
  try {
    const data = await graphQLClient.request(ASSESSMENT_COLLECTION);
    if (!data) {
      throw new Error("Failed to fetch data from Contentful");
    }
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data from Contentful");
  }
}
