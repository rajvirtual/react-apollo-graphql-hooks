import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

export const checkinQL = gql`
  mutation CheckIn($petId: ID!) {
    checkIn(id: $petId) {
      pet {
        id
        name
        status
      }
      checkOutDate
      checkInDate
      late
    }
  }
`;

export default () => {
  let [checkIn] = useMutation(checkinQL);
  return checkIn;
};
