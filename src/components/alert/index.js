import React from "react";

import "./index.css";

const Alert = ({ alert }) => (
  <div className={alert.type === "error" ? "alert error" : "alert success"}>
    {alert.message}!
  </div>
);

export default Alert;
