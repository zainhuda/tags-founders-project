import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, slackId }) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={(e) => onCheckboxChange(slackId)}
        className="form-check-input"
      />
      {label}
    </label>
  </div>
);

export default Checkbox;