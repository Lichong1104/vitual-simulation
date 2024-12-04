import React from "react";

function MyToken({ token, left }) {
  return (
    <div className="tokenBox" style={{ left: left ? "20px" : "" }}>
      token：{token}
    </div>
  );
}
MyToken.defaultProps = {
  left: false,
};

export default MyToken;
