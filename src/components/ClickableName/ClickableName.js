import React from "react";

const isSelected = (id, selectedItemId) => id === selectedItemId;

export default ({ id, name, selectedItemId, onClick }) => (
  <div
    className={
      "clickable-name" + (isSelected(id, selectedItemId) ? " selected" : "")
    }
    onClick={onClick}
  >
    {name}
  </div>
);
