import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../utils/styles/globals";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { display } from "../../utils/styles/devices";
import { ThemeToggleType } from "../../utils/types/types";

const Header: React.FC<ThemeToggleType> = ({ theme, toggleTheme }) => {
	const [isMenuVisible, setMenuVisible] = useState(false);

	return (
		<HeaderContainer>
			<Container>
				<Navbar>
					<LogoButtons>
						<Logo aria-label="Home">Tahir</Logo>
						<NavButtons>
							<NavButton onClick={() => toggleTheme()}>
								{theme === "dark" ? <FiSun /> : <IoMdMoon />}
							</NavButton>
							<NavButton onClick={() => setMenuVisible(!isMenuVisible)}>
								{!isMenuVisible ? <FiMenu /> : <FiX />}
							</NavButton>
						</NavButtons>
					</LogoButtons>
					<MenuContianer
						style={{ display: isMenuVisible ? "block" : "hidden" }}>
						{isMenuVisible ? (
							<MenuList>
								<MenuItem>Blog</MenuItem>
								<MenuItem>About</MenuItem>
								<MenuItem>Projects</MenuItem>
								<MenuItem>
									<FaLinkedin />
								</MenuItem>
								<MenuItem>
									<FaGithub />
								</MenuItem>
							</MenuList>
						) : null}
					</MenuContianer>
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
	backdrop-filter: blur(0.5rem);
	font-size: 2rem;
`;

const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Logo = styled.div`
	font-weight: 700;
	color: hsl(208, 100%, 55%);
`;

const LogoButtons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	gap: 1rem;
`;

const NavButtons = styled.div`
	display: flex;
	gap: 0.625rem;
`;

const NavButton = styled.div``;

const MenuContianer = styled.div`
	width: 90%;
	font-size: 1.8rem;
`;

const MenuList = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 0.3125rem;
	gap: 1.3125rem;
	position: absolute;
	top: 5.5rem;
	left: 0;
	right: 0;
	opacity: 0.9;
	background-color: ${(props) => props.theme.colors.navClr};
	height: calc(100vh - 5.5rem);

	@media ${display.laptopS} {
		position: static;
		flex-direction: row;
	}
`;

const MenuItem = styled.li`
	list-style: none;
	padding-left: 1.3125rem;
	font-weight: 450;

	&:hover {
		opacity: 0.75;
	}
`;
