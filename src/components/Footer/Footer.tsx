import styled from "styled-components";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { Container } from "../../utils/styles/globals";

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<Container>
				<div>
					<div>
						<Image src={logo} alt="logo" />
					</div>
					<div>
						<h4>pages</h4>
						<ul>
							<li>Home</li>
							<li>About</li>
							<li>Projects</li>
						</ul>
					</div>
					<div>
						<h4>Other pages</h4>
						<ul>
							<li>Twitter</li>
							<li>LinkedIn</li>
							<li>Hashnode</li>
						</ul>
					</div>
				</div>
			</Container>
		</FooterContainer>
	);
};

export default Footer;

const FooterContainer = styled.footer`
	background-color: ${(props) => props.theme.colors.primaryClrDkr};
	margin-top: auto;
	padding: 4rem 0;
	color: white;
	height: 200vh;
`;
