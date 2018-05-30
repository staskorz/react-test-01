import React from "react";
import Contact from "./Contact";

const Group = ({ id, name, contacts, depth }) => (
  <div>
    {depth > 0 ? <div>{name}</div> : null}
    <div style={{ marginLeft: depth > 0 ? 20 : 0 }}>
      {contacts.map(
        ({ id, ...props }) =>
          props.type === "Group" ? (
            <Group {...props} depth={depth + 1} id={id} key={id} />
          ) : (
            <Contact {...props} id={id} key={id} />
          )
      )}
    </div>
  </div>
);

export default Group;
