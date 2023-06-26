import React, { useState } from 'react';
import DropdownList from './DropdownList';
import itemsList from '../data';

function Dropdown() {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  return (
    <div className="container">
      <div
        data-id="wrapper"
        className="dropdown-wrapper open"
      >
        <button
          data-id="toggle"
          className="btn"
          type="button"
          onClick={handleOpen}
        >
          <span>Account Settings</span>
          <i className="material-icons">public</i>
        </button>

        { isOpen ? <DropdownList itemsList={itemsList} /> : null }
      </div>
    </div>
  );
}

export default Dropdown;
