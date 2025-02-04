import { Form, FormControlProps } from "react-bootstrap";

interface InputType {
  id: string;
  type: FormControlProps["type"];
  label: string;
  name: string;
}

export const Input = ({ type, id, label, name }: InputType) => {
  return (
    <div className="text-left">
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control type={type} id={id} name={name} />
    </div>
  );
};
