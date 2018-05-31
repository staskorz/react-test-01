import React from "react";
import ClickableName from "./ClickableName";
import Contact from "./Contact";

const Group = ({
  id,
  name,
  contacts,
  depth,
  selectedItemId,
  setSelectedItemId
}) => (
  <div>
    {depth > 0 ? (
      <ClickableName
        id={id}
        name={name}
        selectedItemId={selectedItemId}
        setSelectedItemId={setSelectedItemId}
      />
    ) : null}
    <div style={{ marginLeft: depth > 0 ? 20 : 0 }}>
      {contacts.map(({ id, ...props }) => {
        const commonProps = {
          id,
          key: id,
          selectedItemId,
          setSelectedItemId
        };

        return props.type === "Group" ? (
          <Group {...props} {...commonProps} depth={depth + 1} />
        ) : (
          <Contact {...props} {...commonProps} />
        );
      })}
    </div>
  </div>
);

export default Group;
