import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert, list }) => {
  console.log(type, "type");
  console.log(msg, "msg");

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);

  return <p className={`alert alert-${type}`}> {msg} </p>;
};

export default Alert;
