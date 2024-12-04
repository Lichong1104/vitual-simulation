import React from "react";
import notFound from "../../image/notFound.jpg";
function NotFound() {
  return (
    <div style={{ height: "100%" }}>
      <img style={{ height: "100%", width: "100%" }} src={notFound} alt="" />
    </div>
  );
}

export default NotFound;
