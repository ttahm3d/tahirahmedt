import type { NextPage } from "next";
import Head from "next/head";
import {
	Container,
	HeroSection,
	CenterContent,
	Title,
	Paragraph,
} from "../src/utils/styles/globals";
import Socials from "../src/components/Socials/Socials";

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

			<Paragraph>
				I&apos;m a frontend developer currently working at&nbsp;
				<strong>Pricewaterhouse Coopers</strong>, prior to that I was
				<strong>&nbsp;Project Engineer</strong> at{" "}
				<strong>&nbsp;Wipro Limited</strong>. I graduated from{" "}
				<strong>Nitte Meenakshi Institute of Technology</strong>
				&nbsp; with a <strong>Bachelor&apos;s of Engineering</strong> degree
				in&nbsp;
				<strong>Computer Science and Engineering</strong> in 2018. During my
				stint with Wipro, I have worked as a <strong>Devops Engineer</strong> -
				migrating Dotnet Apps from on-premise environments to
				<strong>&nbsp;Azure Cloud</strong>&nbsp; for &nbsp;
				<strong>Union Bank of Switzerland</strong>.
			</Paragraph>
			<Paragraph>
				Away from the programming world, I follow <strong>Formula 1</strong>
				&nbsp;and&nbsp;
				<strong>Ultimate Fighting Championship</strong>. I used to be a fan of
				Cricket until <strong>IPL</strong> came and ruined it for me. But
				sometimes I still watch non-subcontinent Test Matches. Apart from that I
				follow&nbsp;
				<strong>Couter Strike</strong> and <strong>DotA</strong> Esports and
				off-late have lost interest in both games.
			</Paragraph>
			<CenterContent>
				<Paragraph>Follow me on below socials</Paragraph>
			</CenterContent>
			<Socials />
		</Container>
	);
};

export default About;
