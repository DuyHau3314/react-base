import { FC, ReactElement } from 'react';
import Row from 'src/layout/components/Row';
import { device } from 'src/theme';
import styled from 'styled-components';

const footerList = [
  {
    label: '会員登録',
    link: '#'
  },
  {
    label: '運営会社',
    link: '#'
  },
  {
    label: '利用規約',
    link: '#'
  },
  {
    label: '個人情報の取扱について',
    link: '#'
  },
  {
    label: '特定商取引法に基づく表記',
    link: '#'
  },
  {
    label: 'お問い合わせ',
    link: '#'
  }
];

const StyleFooter = styled(Row)`
  background-color: ${(props) => props.theme.colors.dark700};
  color: ${(props) => props.theme.colors.light};

  width: 100%;

  padding: 55px 10%;

  @media ${device.small} {
    padding: 15px 5%;
  }

  @media ${device.medium} {
    padding: 15px 10%;
  }

  @media ${device.large} {
    padding: 15px 20%;
  }

  a:hover {
    color: ${(props) => props.theme.colors.primary500};
  }
`;

const Footer: FC = (): ReactElement => {
  return (
    <StyleFooter gap="8%">
      {footerList.map((item) => (
        <a key={item.label} href={item.link}>
          {item.label}
        </a>
      ))}
    </StyleFooter>
  );
};

export default Footer;
