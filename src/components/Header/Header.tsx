import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import { FiSun, FiMenu, FiX, FiGithub } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { display } from "../../utils/styles/devices";
import { ThemeToggleType } from "../../utils/types/types";
import { Container } from "../../utils/styles/globals";
import logo from "../../assets/logo.svg";
import { useScreenWidth } from "../../utils/hooks/useScreenWidth";

const Header: React.FC<ThemeToggleType> = ({ theme, toggleTheme }) => {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

	const [width] = useScreenWidth();

	return (
		<HeaderContainer>
			<Container>
				<Navbar>
					<Logo aria-label="Home">
						<Image src={logo} alt="logo" />
					</Logo>
					{isMenuVisible || width > 1024 ? (
						<MenuContianer>
							<MenuList>
								<MenuItem>Blog</MenuItem>
								<MenuItem>About</MenuItem>
								<MenuItem>Projects</MenuItem>
								<MenuItem>
									<GrLinkedin />
								</MenuItem>
								<MenuItem>
									<FiGithub />
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
	width: 100%;
	max-width: 1024px;
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

const Logo = styled.div``;

const NavButtons = styled.div`
	display: flex;
	gap: 0.625rem;
`;

const NavButton = styled.div``;

const MenuButton = styled.div`
	display: none;

	@media ${display.laptop} {
		display: block;
	}
`;

const MenuContianer = styled.div`
	@media ${display.laptop} {
		background-color: ${(props) => props.theme.colors.bgClr};
		position: absolute;
		top: 5.5rem;
		left: 0;
		right: 0;
		opacity: 0.9;
		height: calc(100vh - 5.5rem);
		border: 1px solid red;
	}
`;

const MenuList = styled.ul`
	display: flex;
	justify-content: flex-start;
	padding: 0;
	margin: 0;

	@media ${display.laptop} {
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
		height: 100%;
		gap: 2rem;
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
