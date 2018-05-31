import React from "react";

const isSelected = (id, selectedItemId) => id === selectedItemId;

export default ({ id, name, selectedItemId, onClick }) => (
  <div
    className={isSelected(id, selectedItemId) ? "selected" : null}
    onClick={onClick}
  >
    {name}
  </div>
);
