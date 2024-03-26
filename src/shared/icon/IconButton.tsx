import React from 'react';
import Row from 'src/layout/components/Row';
import styled, { css } from 'styled-components';

import { ReactComponent as BurgerMenu } from '/src/assets/icons/burgerMenu.svg';
import { ReactComponent as Challenge } from '/src/assets/icons/challenge.svg';
import { ReactComponent as Close } from '/src/assets/icons/close.svg';
import { ReactComponent as Dinner } from '/src/assets/icons/dinner.svg';
import { ReactComponent as Info } from '/src/assets/icons/info.svg';
import { ReactComponent as Logo } from '/src/assets/icons/logo.svg';
import { ReactComponent as Lunch } from '/src/assets/icons/lunch.svg';
import { ReactComponent as Menu } from '/src/assets/icons/menu.svg';
import { ReactComponent as Morning } from '/src/assets/icons/morning.svg';
import { ReactComponent as Note } from '/src/assets/icons/note.svg';
import { ReactComponent as ScrollTop } from '/src/assets/icons/scrollTop.svg';
import { ReactComponent as Snack } from '/src/assets/icons/snack.svg';

// Mapping of icon components to their names
const mapIcon = {
  logo: Logo,
  menu: Menu,
  close: Close,
  info: Info,
  note: Note,
  challenge: Challenge,
  morning: Morning,
  lunch: Lunch,
  dinner: Dinner,
  snack: Snack,
  scrollTop: ScrollTop,
  burgerMenu: BurgerMenu
};

// Define size mappings
const sizes = {
  small: '30px',
  medium: '50px',
  large: '80px',
  xlarge: '100px',
  xxlarge: '120px',
  xxxlarge: '140px'
};
export type IconName = keyof typeof mapIcon;
export type IconSize = keyof typeof sizes;

const StyledButton = styled.button<{ size: IconSize; width?: string; height?: string; badge?: string; active?: boolean }>`
  border: none;
  background: none;
  cursor: pointer;
  display: inline-flex;
  position: relative; // Needed to position the badge absolutely
  align-items: center;
  justify-content: center;
  padding: 0;

  ${({ size, width, height }) => css`
    svg {
      width: ${width || sizes[size]};
      height: ${height || sizes[size]};
    }
  `}

  ${({ badge }) =>
    badge &&
    css`
      &:before {
        content: '${badge}';
        position: absolute;
        top: -10%;
        right: -20%;
        background-color: ${({ theme }) => theme.colors.primary600};
        border-radius: 50%;
        color: white;
        padding: 0.5em 0.5em;
        font-size: 0.7em;
        font-weight: bold;
        min-width: 1.5em;
        height: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}

  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.primary};

      svg {
        fill: ${theme.colors.primary}; // or 'stroke' depending on your SVG
      }
    `}
`;

const Label = styled.span<{ active?: boolean }>`
  margin-left: 8px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary600};
    cursor: pointer;
  }

  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.primary600};
    `}
`;

interface IconButtonProps {
  label?: string;
  onClick?: () => void;
  size?: IconSize;
  width?: string;
  height?: string;
  name: IconName;
  badge?: string;
  active?: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({ name, label, onClick, size = 'medium', width, height, badge, active }) => {
  const Icon = mapIcon[name];

  return (
    <Row centerY>
      <StyledButton onClick={onClick} aria-label={label || name} size={size} width={width} height={height} badge={badge} active={active}>
        <Icon aria-hidden={label ? 'false' : 'true'} />
      </StyledButton>
      {label && <Label active={active}>{label}</Label>}
    </Row>
  );
};

export default IconButton;
