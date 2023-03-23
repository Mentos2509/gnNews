import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  font-size: ${({ theme }) => theme.sizes.s};
  font-weight: ${({ theme }) => theme.weights.medium};
  font-family: inherit;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  border: ${({ theme }) => `2px solid ${theme.colors.light}`};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1.5rem;

  ${({ variant }) => {
    switch (variant) {
      case "link":
        return css`
          background-color: transparent;
          border: 0;
        `;
      case "icon":
        return css`
          background-color: transparent;
          border: 0;
          padding: 0;
        `;
    }
  }};
`;

const Button = ({ variant, children, ...props }) => {
  return (
    <ButtonStyled variant={variant} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
