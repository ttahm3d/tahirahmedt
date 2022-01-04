import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import {
	Container,
	Title,
	HeroSection,
	Paragraph,
} from "../src/utils/styles/globals";
import { IconType } from "react-icons";

type Tech = {
	id: number;
	title: string;
};

const Home: NextPage = () => {
	const [tech, setTech] = useState<Tech[]>([
		{
			id: 1,
			title: "React",
		},
		{
			id: 2,
			title: "Redux",
		},
		{
			id: 3,
			title: "JavaScript",
		},
		{
			id: 4,
			title: "Typescript",
		},
		{
			id: 5,
			title: "Next JS",
		},
	]);

	return (
		<Container>
			<HeroSection>
				<Title>
					Hi, I&apos;m <span>Tahir Ahmed</span>👋
				</Title>
			</HeroSection>
			<Paragraph>
				I&apos;m a Frontend Developer currently working at&nbsp;
				<span>Pricewaterhouse Coopers</span>. I have predominently worked with
				the technologies / libraries in the <span>React Ecosystem</span>.
			</Paragraph>
			<PrimaryButton
				href="https://drive.google.com/file/d/1xrrJbpRbTasWyrFXoHzVoN2Zke2N02WT/view?usp=sharing"
				target="_black">
				View Resume
			</PrimaryButton>
			<TechStack>
				<Paragraph>
					Below are the technologies that I love to work with
					<TList>
						{tech.map((t) => (
							<TItem key={t.id}>{t.title}</TItem>
						))}
					</TList>
				</Paragraph>
			</TechStack>
		</Container>
	);
};

export default Home;

const TechStack = styled.div``;

const TList = styled.ul`
	/* list-style: none;
	display: flex;
	margin: 0;
	padding: 0;
	gap: 1rem; */
`;

const TItem = styled.li``;

const PrimaryButton = styled.a`
	padding: 0.5rem 0.75rem;
	background-color: ${(props) => props.theme.colors.primaryClr};

	:hover {
		background-color: ${(props) => props.theme.colors.primaryClrDk};
	}
`;
