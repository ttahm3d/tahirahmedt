import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../../utils/styles/globals";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiSun, FiMenu, FiX } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { display } from "../../utils/styles/devices";
import { ThemeToggleType } from "../../utils/types/types";
import logo from "../../assets/logo.svg";

const Header: React.FC<ThemeToggleType> = ({ theme, toggleTheme }) => {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

	return (
		<HeaderContainer>
			<Navbar>
				<Logo aria-label="Home">
					<Image src={logo} alt="logo" />
				</Logo>
				{isMenuVisible ? (
					<MenuContianer>
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
					</MenuContianer>
				) : null}
				<NavButtons>
					<NavButton onClick={() => toggleTheme()}>
						{theme === "dark" ? <FiSun /> : <IoMdMoon />}
					</NavButton>
					<MenuButton onClick={() => setMenuVisible(!isMenuVisible)}>
						{!isMenuVisible ? <FiMenu /> : <FiX />}
					</MenuButton>
				</NavButtons>
			</Navbar>
		</HeaderContainer>
	);
};

export default Header;

const HeaderContainer = styled.header`
	padding: 1rem 0;
	position: sticky;
	top: 0;
	backdrop-filter: blur(0.5rem);
	width: 90%;
	max-width: 900px;
	margin: 0 auto;
	font-size: 1.5rem;
	z-index: 999;
`;

const Navbar = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
`;

const Logo = styled.div`
	font-weight: 700;
	color: hsl(208, 100%, 55%);
`;

const LogoButtons = styled.div`
	display: flex;
	justify-content: space-between;
`;

const NavButtons = styled.div`
	display: flex;
	gap: 0.625rem;
`;

const NavButton = styled.div``;

const MenuButton = styled.div`
	display: none;

	@media ${display.laptopS} {
		display: block;
	}
`;

const MenuContianer = styled.div`
	/* background: red; */
	@media ${display.laptopS} {
		background-color: ${(props) => props.theme.colors.navClr};
		position: absolute;
		top: 5.5rem;
		left: 0;
		right: 0;
		opacity: 0.9;
		height: calc(100vh - 5.5rem);
	}
`;

const MenuList = styled.ul`
	/* padding: 0;
	margin: 0;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
	padding: 0.3125rem;
	gap: 1.3125rem;
	position: absolute;
	top: 6rem;
	left: 0;
	right: 0;
	opacity: 0.9;
	height: calc(100vh - 6rem);
	z-index: 3;

	@media ${display.laptop} {
		display: none;
	} */

	display: flex;
	justify-content: flex-start;
	padding: 0;
	margin: 0;

	@media ${display.laptopS} {
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		height: 100%;
		gap: 1rem;
	}
`;

const MenuItem = styled.li`
	list-style: none;
	padding-left: 1.3125rem;
	font-weight: 450;
	/* background: purple; */

	&:hover {
		opacity: 0.75;
	}
`;
