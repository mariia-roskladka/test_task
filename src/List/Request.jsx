import React from "react";
const Request = ({ id, about }) => {
  return (
    <li className="list-item">
      {about}
      <button className="list-item__delete-btn"></button>
    </li>
  );
};
export default Request;
