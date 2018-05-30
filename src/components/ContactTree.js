import React from "react";
import Group from "./Group";

export default ({ contacts }) => (
  <div>
    <h1>Contact Tree</h1>
    <Group contacts={contacts} depth={0} />
  </div>
);
