import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import {
	Container,
	HeroSection,
	CenterContent,
	Title,
	Paragraph,
	SubHeading,
} from "../src/utils/styles/globals";
import { SiTwitter, SiInstagram, SiLinkedin } from "react-icons/si";

const About: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>About | Tahir Ahmed</title>
			</Head>
			<HeroSection>
				<CenterContent>
					<Title>
						<span>about</span>
					</Title>
				</CenterContent>
			</HeroSection>
			<SubHeading>
				<span>Hello!!</span>
			</SubHeading>
			<Paragraph>
				I&apos;m a frontend developer currently working at&nbsp;
				<span>Pricewaterhouse Coopers</span>, prior to that I was
				<span>Project Engineer</span> at <span>Wipro Limited</span>.
			</Paragraph>
			<Paragraph>
				I graduated from <span>Nitte Meenakshi Institute of Technology</span>
				&nbsp; with a <span>Bachelor&apos;s of Engineering</span> degree
				in&nbsp;
				<span>Computer Science and Engineering</span> in 2018. During my stint
				with Wipro, I have worked as a <span>Devops Engineer</span> - migrating
				Dotnet Apps from on-premise environments to <span>Azure Cloud</span>
				for &nbsp;
				<span>Union Bank of Switzerland</span>.
			</Paragraph>
			<Paragraph>
				Away from the programming world, I follow <span>Formula 1</span>
				&nbsp;and&nbsp;
				<span>Ultimate Fighting Championship</span>. I used to be a fan of
				Cricket until <span>IPL</span> came and ruined it for me. But sometimes
				I still watch non-subcontinent Test Matches. Apart from that I
				follow&nbsp;
				<span>Couter Strike</span> and <span>DotA</span> Esports and off-late
				have lost interest in both games.
			</Paragraph>
			<Paragraph>
				<CenterContent>Follow me on below socials</CenterContent>
			</Paragraph>
			<SocialsList>
				<Social>
					<a
						href="https://twitter.com/ttahm3d"
						title="twitter"
						target="_blank"
						rel="noopener noreferrer">
						<SiTwitter />
					</a>
				</Social>
				<Social>
					<a
						href="https://twitter.com/ttahm3d"
						title="LinkedIn"
						target="_blank"
						rel="noopener noreferrer">
						<SiLinkedin />
					</a>
				</Social>
				<Social>
					<a
						href="https://twitter.com/ttahm3d"
						title="Instagram"
						target="_blank"
						rel="noopener noreferrer">
						<SiInstagram />
					</a>
				</Social>
			</SocialsList>
		</Container>
	);
};

export default About;

const SocialsList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	padding: 0 0 2rem;
	margin: 0;
	gap: 1rem;
`;

const Social = styled.li`
	font-size: 1.5rem;
	a {
		color: ${(props) => props.theme.colors.primaryClrLt};
	}
`;
