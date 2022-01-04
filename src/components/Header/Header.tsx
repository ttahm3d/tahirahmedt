import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { GrLinkedin } from "react-icons/gr";
import { FiSun, FiMenu, FiX, FiGithub } from "react-icons/fi";
import { IoMdMoon } from "react-icons/io";
import { display } from "../../utils/styles/devices";
import { ThemeToggleType } from "../../utils/types/types";
import { Container, FlexBox } from "../../utils/styles/globals";
import logo from "../../assets/logo.svg";
import { useScreenWidth } from "../../utils/hooks/useScreenWidth";
import { SiHashnode } from "react-icons/si";

const Header: React.FC<ThemeToggleType> = ({ theme, toggleTheme }) => {
	const [isMenuVisible, setMenuVisible] = useState<boolean>(false);

	const [width] = useScreenWidth();

	return (
		<HeaderContainer>
			<Container>
				<Navbar>
					<Logo aria-label="Home">
						<NavLink href="/">
							<Image src={logo} alt="logo" />
						</NavLink>
					</Logo>
					{isMenuVisible || width > 1024 ? (
						<MenuContianer>
							<NavList>
								<NavItem onClick={() => setMenuVisible(false)}>
									<NavLink href="/about">About</NavLink>
								</NavItem>
								<NavItem onClick={() => setMenuVisible(false)}>
									<NavLink href="/projects">Projects</NavLink>
								</NavItem>
								<FlexBox>
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
								</FlexBox>
							</NavList>
						</MenuContianer>
					) : null}
					<NavButtons>
						<NavButton onClick={() => toggleTheme()}>
							{theme === "dark" ? (
								<FiSun fill="hsl(53,92%,50%)" />
							) : (
								<IoMdMoon fill="hsl(245, 26%, 8%)" />
							)}
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
`;

const MenuButton = styled.div`
	display: none;

	@media ${display.laptop} {
		display: block;
	}
`;

const MenuContianer = styled.div`
	@media ${display.laptop} {
		background-color: ${(props) => props.theme.colors.bgClr700};
		position: absolute;
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
	padding-left: 1.3125rem;
	font-weight: 450;

	&:hover {
		color: ${(props) => props.theme.colors.primaryClrLt};
	}
`;

const NavLink = styled(Link)``;

const ExtLink = styled.a``;
