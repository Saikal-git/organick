import React, { useEffect } from "react";
import error404 from "../../assets/error-404.png";

const index = () => {
    useEffect(() => {
        window.scrollTo(0, 10);
      }, []);
  return (
    <div>
      <img src={error404} alt="img" width={900} className="mx-auto" />
    </div>
  );
};

export default index;
