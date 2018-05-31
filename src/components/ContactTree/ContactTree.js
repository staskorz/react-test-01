import React from "react";
import Group from "../Group";

export default props => (
  <div>
    <h1>Contact Tree</h1>
    <Group {...props} depth={0} />
  </div>
);
