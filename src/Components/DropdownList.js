import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function DropdownList({ itemsList }) {
  const [selected, setSelected] = useState(null);

  const handleMouseOver = (e) => {
    setSelected(e.target.textContent);
  };

  const handleMouseLeave = () => {
    setSelected(null);
  };

  return (
    <ul
      data-id="dropdown"
      className="dropdown"
    >
      {
        itemsList.map((item) => (
          <li
            className={selected === item.name ? 'active' : ''}
            key={nanoid()}
          >
            <a
              href={item.link}
              onMouseOver={handleMouseOver}
              onFocus={handleMouseOver}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

DropdownList.propTypes = {
  itemsList: PropTypes.arrayOf(PropTypes.exact({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};

export default DropdownList;
