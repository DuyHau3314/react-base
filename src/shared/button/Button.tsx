import React, { FC, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  label: string;
  variant?: 'primary' | 'secondary';
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const StyledButton = styled.button<Pick<ButtonProps, 'size' | 'variant'>>`
  padding: ${({ size }) => (size === 'large' ? '10px 23px' : size === 'small' ? '5px 10px' : '8px 20px')};
  border: none;
  border-radius: 4px;
  font-size: ${({ size }) => (size === 'large' ? '18px' : size === 'small' ? '12px' : '14px')};
  cursor: pointer;
  outline: none;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background-image: ${({ theme }) => theme.colors.primaryGradient};
      color: ${({ theme }) => theme.colors.light};

      &:hover {
        background-color: #0056b3;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${({ theme }) => theme.colors.gray400};
      color: ${({ theme }) => theme.colors.dark700};
      cursor: not-allowed;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray400}; // same as the disabled background
      }
    `}
`;

const Button: FC<ButtonProps> = ({ size = 'medium', label, variant = 'primary', onClick, disabled = false }) => {
  return (
    <StyledButton size={size} variant={variant} onClick={onClick} disabled={disabled}>
      {label}
    </StyledButton>
  );
};

export default Button;
