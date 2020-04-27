import { gql, useMutation } from "@apollo/client";
const loginQL = gql`
  mutation($username: ID!, $password: String!) {
    logIn(username: $username, password: $password) {
      customer {
        name
      }
      token
    }
  }
`;

export default () => {
  let doLogin = useMutation(loginQL)[0];
  return doLogin;
};
