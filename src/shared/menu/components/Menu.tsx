import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from 'src/shared/icon/IconButton';
import { device } from 'src/theme';
import styled from 'styled-components';

const menuList = [
  {
    label: '自分の記録',
    path: '/my-record'
  },
  {
    label: '体重グラフ',
    path: '/weight-graph'
  },
  {
    label: '目標',
    path: '/goal'
  },
  {
    label: '選択中のコース',
    path: '/selected-course'
  },
  {
    label: 'コラム一覧',
    path: '/my-posts'
  },
  {
    label: '設定',
    path: '/setting'
  }
];

const MenuIcon = styled.div`
  cursor: pointer;
  z-index: 10;
`;

const MenuItems = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.colors.gray300};
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9;
  text-align: left;

  @media ${device.small} {
    top: 100%;
    left: 0;
    overflow: hidden;
    width: 200px;
  }
`;

const BurgerMenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const MenuItem = styled.div`
  padding: 1.2rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark500};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.dark500};

    cursor: pointer;
  }

  @media ${device.small} {
    padding: 1rem;
  }
`;

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BurgerMenuContainer>
      <MenuIcon onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IconButton name="close" size="small" /> : <IconButton name="burgerMenu" size="small" />} {/* Replace with your icons */}
      </MenuIcon>
      <MenuItems open={isOpen}>
        {menuList.map((menu) => (
          <Link to={menu.path} key={menu.label} onClick={() => setIsOpen(false)}>
            <MenuItem>{menu.label}</MenuItem>
          </Link>
        ))}
      </MenuItems>
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
