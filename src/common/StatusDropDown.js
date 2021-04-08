import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const StatusDropdown = (props) => {

  const options = ["Todo", "In Progress", "Done"];
  const defaultOption = options[0];
  return (
      <Dropdown options={options} onChange={props.onSelect} value={defaultOption} placeholder="Select an option" />
  );
}

export default StatusDropdown;