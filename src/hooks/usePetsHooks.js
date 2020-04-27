import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const petFieldsQuery = gql`
  fragment petFields on Pet {
    id
    name
    category
    status
    inCareOf {
      name
    }
  }
`;

export const filterPetsQuery = gql`
  query petsQuery($status: PetStatus) {
    allPets(status: $status) {
      ...petFields
    }
  }
  ${petFieldsQuery}
`;

export default (status) => {
  return useQuery(filterPetsQuery, {
    fetchPolicy: "network-only",
    variables: {
      status: status,
    },
  });
};
