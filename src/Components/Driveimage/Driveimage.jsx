import React from 'react';
import "./Driveimage.css";

import drivemedical from "../../assets/drivemedical.png";

const Driveimage = () => {
  return (
    <div className="drive">
      <img src={drivemedical} alt="Drive Medical" />
    </div>
  );
};

export default Driveimage;
