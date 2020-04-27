import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

export const checkoutQL = gql`
  mutation CheckOut($petId: ID!) {
    checkOut(id: $petId) {
      pet {
        id
        name
        status
      }
      customer {
        name
      }
    }
  }
`;

export default () => {
  let [checkOut] = useMutation(checkoutQL);
  return checkOut;
};
