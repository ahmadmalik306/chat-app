import React from "react";
import LoginForm from "../../Forms/Login";
import { gql, useMutation } from "@apollo/client";
const LOGIN_USER = gql`
  mutation LoginUser($input: loginInput!) {
    loginUser(input: $input) {
      message
      token
    }
  }
`;
const Login = () => {
  const [mutate, { data }] = useMutation(LOGIN_USER);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form as HTMLFormElement);
    let input: Record<string, any> = {};
    for (let [name, value] of formData.entries()) {
      input[name] = value;
    }
    mutate({ variables: { input } });
    // You can now send `formData` to your server or process it as needed
  };
  return <LoginForm handleSubmit={handleSubmit} />;
};

export default Login;
