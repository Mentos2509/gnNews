import React from "react";
import styled from "styled-components";
import Heading from "components/atoms/Heading/Heading";
import ListCardIcon from "assets/icons/list.svg";
import GridCardIcon from "assets/icons/grid.svg";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";

const HeadingStyled = styled.h1`
  font-size: ${({ theme }) => theme.sizes.xl};
  font-weight: ${({ theme }) => theme.weights.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const NavStyled = styled.nav`
  display: flex;
`;

const NavListStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavItemStyled = styled.li`
  display: flex;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0 15px -5px rgba(66, 68, 90, 0.5);
`;

const Header = () => (
  <>
    <HeaderStyled>
      <Heading tag="h1">NewsMe</Heading>
      <NavStyled>
        <NavListStyled>
          <NavItemStyled>
            <Button>pupup</Button>
          </NavItemStyled>
          <NavItemStyled>
            <Button variant="icon">
              <Icon src={GridCardIcon} />
            </Button>
          </NavItemStyled>
          <NavItemStyled>
            <Button variant="icon">
              <Icon src={ListCardIcon} />
            </Button>
          </NavItemStyled>
        </NavListStyled>
      </NavStyled>
    </HeaderStyled>
  </>
);

export default Header;
