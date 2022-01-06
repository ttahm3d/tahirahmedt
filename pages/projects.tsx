import type { NextPage } from "next";
import Head from "next/head";
import {
	Container,
	HeroSection,
	Paragraph,
	CenterContent,
	Title,
} from "../src/utils/styles/globals";

const Projects: NextPage = () => {
	return (
		<Container>
			<Head>
				<title>Projects | Tahir Ahmed</title>
			</Head>
			<HeroSection>
				<CenterContent>
					<Title>
						<span>projects</span>
					</Title>
				</CenterContent>
			</HeroSection>
			<Paragraph>Coming soon</Paragraph>
		</Container>
	);
};

export default Projects;
