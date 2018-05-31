import React from "react";
import ClickableName from "../ClickableName";
import EnhacedGroup from "./index";
import Contact from "../Contact";

const Group = ({
  id,
  name,
  contacts,
  depth,
  selectedItemId,
  setSelectedItemId,
  setExpandedGroupIds,
  expandedGroupIds,
  onClick
}) => (
  <div>
    {depth > 0 ? (
      <ClickableName
        id={id}
        name={name}
        selectedItemId={selectedItemId}
        setSelectedItemId={setSelectedItemId}
        onClick={onClick}
      />
    ) : null}

    {depth === 0 || expandedGroupIds.includes(id) ? (
      <div style={{ marginLeft: depth > 0 ? 20 : 0 }}>
        {contacts.map(({ id, ...props }) => {
          const commonProps = {
            id,
            key: id,
            selectedItemId,
            setSelectedItemId
          };

          return props.type === "Group" ? (
            <EnhacedGroup
              {...props}
              {...commonProps}
              depth={depth + 1}
              expandedGroupIds={expandedGroupIds}
              setExpandedGroupIds={setExpandedGroupIds}
            />
          ) : (
            <Contact {...props} {...commonProps} />
          );
        })}
      </div>
    ) : null}
  </div>
);

export default Group;
