import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import { FiSun, FiMenu, FiX, FiGithub } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { display } from "../../../styles/devices";
import { ThemeToggleType } from "../../utils/types/types";
import { Container, FlexBox } from "../../../styles/globals";
import logo from "../../assets/logo.svg";
import { useScreenWidth } from "../../utils/hooks/useScreenWidth";
import { SiHashnode } from "react-icons/si";

const Header: React.FC<ThemeToggleType> = ({ theme, toggleTheme }) => {
  const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

  console.log(theme);

  const [width] = useScreenWidth();

  return (
    <HeaderContainer>
      <Container>
        <Navbar>
          <NavLink href="/">
            <Logo aria-label="Home">
              <Image src={logo} alt="logo" />
            </Logo>
          </NavLink>
          {isMenuVisible || width > 1024 ? (
            <MenuContianer>
              <NavList>
                <NavItem onClick={() => setMenuVisible(false)}>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem onClick={() => setMenuVisible(false)}>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem onClick={() => setMenuVisible(false)}>
                  <NavLink href="/projects">Projects</NavLink>
                </NavItem>
                <FlexBoxGap>
                  <NavItem onClick={() => setMenuVisible(false)}>
                    <ExtLink
                      href="https://blog.tahirahmedt.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiHashnode />
                    </ExtLink>
                  </NavItem>
                  <NavItem onClick={() => setMenuVisible(false)}>
                    <ExtLink
                      href="https://www.linkedin.com/in/tahirahmedt"
                      target="_blank"
                      rel="noopener noreferrer">
                      <GrLinkedin />
                    </ExtLink>
                  </NavItem>
                  <NavItem onClick={() => setMenuVisible(false)}>
                    <ExtLink
                      href="https://www.github.com/ttahm3d"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FiGithub />
                    </ExtLink>
                  </NavItem>
                </FlexBoxGap>
              </NavList>
            </MenuContianer>
          ) : null}
          <NavButtons>
            <NavButton onClick={() => toggleTheme()}>
              {theme === "light" ? <IoMdMoon /> : <FiSun />}
            </NavButton>
            <MenuButton onClick={() => setMenuVisible((v) => !v)}>
              {!isMenuVisible ? <FiMenu /> : <FiX />}
            </MenuButton>
          </NavButtons>
        </Navbar>
      </Container>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  padding: 1rem 0;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.blue1};
  border-bottom: 1px solid ${(props) => props.theme.colors.blue7};
  width: 100%;
  margin: 0 auto;
  font-size: 1.25rem;
  z-index: 99;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  max-width: 56.25rem;
  width: 100%;
  margin: 0 auto;
`;

const Logo = styled.div`
  Link {
  }
  cursor: pointer;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.625rem;
`;

const NavButton = styled.div`
  cursor: pointer;

  :focus {
    outline: 1px solid ${(props) => props.theme.colors.blue7};
    border-radius: 1rem;
  }
`;

const MenuButton = styled.div`
  display: none;

  @media ${display.laptop} {
    display: block;
  }
`;

const MenuContianer = styled.div`
  @media ${display.laptop} {
    background-color: ${(props) => props.theme.colors.blue1};
    position: absolute;
    padding: 0 2rem;
    top: 5.5rem;
    left: 0;
    right: 0;
    opacity: 0.97;
    height: calc(100vh - 5.5rem);
    transform: translate(0, 0);
    transition: transform 2s ease-in;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  gap: 1rem;

  @media ${display.laptop} {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    height: 100%;
    gap: 2rem;
  }
`;

const NavItem = styled.li`
  list-style: none;
  font-weight: 450;
  transition: 0.3s ease-in border;
  border: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.blue9};
  }

  @media screen and (min-width: 64em) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const NavLink = styled(Link)``;

const ExtLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FlexBoxGap = styled(FlexBox)`
  gap: 1rem;
`;
