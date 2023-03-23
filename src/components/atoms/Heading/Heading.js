import React from "react";
import styled, { css } from "styled-components";

const HeadingStyled = styled.h1`
  font-weight: ${({ theme }) => theme.weights.semibold};
  ${({ tag }) => {
    switch (tag) {
      case "h1":
        return css`
          font-size: ${({ theme }) => theme.sizes.xl};
        `;
      case "h2":
        return css`
          font-size: ${({ theme }) => theme.sizes.l};
        `;
      case "h3":
        return css`
          font-size: ${({ theme }) => theme.sizes.m};
        `;
      case "h4":
        return css`
          font-size: ${({ theme }) => theme.sizes.s};
        `;
      default:
        return css`
          font-size: ${({ theme }) => theme.sizes.s};
        `;
    }
  }}
`;

const Heading = ({ tag, children }) => {
  const availableHeadings = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const Tag = availableHeadings.includes(tag) ? tag : "p";

  return <HeadingStyled as={Tag}>{children}</HeadingStyled>;
};

export default Heading;
