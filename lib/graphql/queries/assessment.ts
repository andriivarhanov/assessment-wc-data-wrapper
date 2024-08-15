import { gql } from "graphql-request";

export const ASSESSMENT_COLLECTION = gql`
  query {
    assessmentCollection {
      items {
        name,
        slug,
        intro {
          json
        },
        questions,
        resultsIntro {
          json
        }
      }
    }
  }
`;
