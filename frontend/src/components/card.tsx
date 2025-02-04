import React from "react";
import { Card as ReactCard, Button } from "react-bootstrap";
export const Card = ({
  buttonConfig: { btnText, variant = "primary", onClick },
  title,
  children,
}: {
  title: string;
  buttonConfig: {
    btnText: string;
    variant?: string;
    onClick: ({ ...props }) => void;
  };
  children: React.ReactElement;
}) => {
  return (
    <ReactCard style={{ width: "18rem" }}>
      <ReactCard.Header>
        <ReactCard.Title>{title}</ReactCard.Title>
      </ReactCard.Header>
      <ReactCard.Body>{children}</ReactCard.Body>
      <ReactCard.Footer className="text-center">
        <Button variant={variant} onClick={onClick}>
          {btnText}
        </Button>
      </ReactCard.Footer>
    </ReactCard>
  );
};
