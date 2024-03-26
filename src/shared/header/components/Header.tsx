import React, { FC, ReactElement } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Row from 'src/layout/components/Row';
import SplitScreen from 'src/layout/components/SplitScreen';
import IconButton from 'src/shared/icon/IconButton';
import BurgerMenu from 'src/shared/menu/components/Menu';
import { device } from 'src/theme';
import styled from 'styled-components';

import { menu } from '../config/header';

const StyleHeader = styled.header`
  background-color: ${(props) => props.theme.colors.dark700};
  border: none;
  color: ${(props) => props.theme.colors.light};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100%;

  padding: 15px 10%;

  @media ${device.small} {
    padding: 15px 5%;
  }

  @media ${device.medium} {
    padding: 15px 10%;
  }

  @media ${device.large} {
    padding: 15px 20%;
  }
`;

const Header: FC = (): ReactElement => {
  const location = useLocation();

  return (
    <StyleHeader>
      <SplitScreen leftWidth={2} rightWidth={3} centerY>
        <Row centerY>
          <Link to="/">
            <IconButton name="logo" size="xxxlarge" height="100%" />
          </Link>
        </Row>

        <Row centerY end gap="8%">
          {menu.map((item) =>
            item.to ? (
              <Link to={item.to} key={item.name}>
                <IconButton
                  active={location.pathname === item.to}
                  name={item.name}
                  size={item.size}
                  height={item.height}
                  label={item.label}
                  badge={item.badge}
                />
              </Link>
            ) : item.component ? (
              React.createElement(item.component, { key: item.name })
            ) : null
          )}
        </Row>
      </SplitScreen>
    </StyleHeader>
  );
};

export default Header;
