import React from "react";
import "./Card.css";

function CardHeader({ children, ...props }) {
  return (
    <div className="card-header" {...props}>
      {children}
    </div>
  );
}

function CardBody({ children, ...props }) {
  return (
    <div className="card-body" {...props}>
      {children}
    </div>
  );
}

function CardFooter({ children, ...props }) {
  return (
    <div className="card-footer" {...props}>
      {children}
    </div>
  );
}

function Card({ children }) {
  return <div className="box">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
