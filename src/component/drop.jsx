import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';

const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    // ... (other shades of grey)
};

const SimpleMenu = () => {
    const { menuItems } = props;

    const createHandleMenuClick = (menuItem) => {
        return () => {
            console.log(`Clicked on ${menuItem}`);
        };
    };

    return (
        <div>
            <MenuButton>My account</MenuButton>
            <ul>
                {menuItems.map((item) => (
                    <MenuItem key={item} onClick={createHandleMenuClick(item)}>
                        {item}
                    </MenuItem>
                ))}
            </ul>
        </div>
    );
};

SimpleMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const MenuItem = styled(BaseMenuItem)`
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid #007FFF;
    background-color: #E5EAF2;
    color: #434D5B;
  }

  &:hover {
    background-color: #007FFF;
    color: #FFFFFF;
  }
`;

const MenuButton = styled(BaseMenuButton)`
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  background: #FFFFFF;
  border: 1px solid #E5EAF2;
  color: #434D5B;

  &:hover {
    background: #F3F6F9;
    border-color: #DAE2ED;
  }

  &:active {
    background: #E5EAF2;
  }

  &:focus-visible {
    outline: 4px solid #007FFF;
  }
`;

export default SimpleMenu;
