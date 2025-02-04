import React from "react";
import "./Login.css";
import { Input } from "../../components";
import { Button } from "react-bootstrap";
/**
 *
 * @returns
 *
 *
 */
const LoginForm = ({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => (
  <div className="cont">
    <div className="top"></div>
    <div className="bottom"></div>
    <div className="center">
      <form
        onSubmit={(e) => {
          console.log(e.target);
          handleSubmit(e);
          //   console.log(e.target?.elements.username.value);
          //   console.log(e.target.email.value);
          e.preventDefault();
        }}
      >
        <h1 className="text-center">Login</h1>
        <Input type="email" id="email" label="Email" name="email" />
        <Input type="password" id="password" label="Password" name="password" />
        <div className="text-center">
          <Button variant="primary" type="submit" style={{ marginTop: "1rem", width: "100%" }}>
            Login
          </Button>
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
