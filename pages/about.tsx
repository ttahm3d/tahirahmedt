import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
	Container,
	HeroSection,
	CenterContent,
	Title,
	Paragraph,
} from "../src/utils/styles/globals";
import js from "../src/assets/js.svg";
import ts from "../src/assets/ts.svg";
import react from "../src/assets/react.svg";
import redux from "../src/assets/redux.svg";
import nextjs from "../src/assets/nextjs.svg";
import sass from "../src/assets/sass.svg";
import Socials from "../src/components/Socials/Socials";
import styled from "styled-components";

type Tech = {
	id: number;
	title: string;
	icon: string;
};

const technologies: Tech[] = [
	{
		id: 1,
		icon: react,
		title: "React",
	},
	{
		id: 2,
		icon: redux,
		title: "Redux",
	},
	{
		id: 3,
		icon: js,
		title: "JavaScript",
	},
	{
		id: 4,
		icon: ts,
		title: "Typescript",
	},
	{
		id: 5,
		icon: nextjs,
		title: "NextJS",
	},
	{
		id: 6,
		icon: sass,
		title: "SASS",
	},
];

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
				I love working with <strong>React JS</strong>. I picked it up when I was
				contemplating my career choices during the pandemic and I&apos;m so glad
				that I stuck with it. Apart from that I&apos;m learning&nbsp;
				<strong>NextJS</strong>&nbsp; and aspire to be a&nbsp;
				<strong>FullStack Developer</strong> by the end of 2022.
			</Paragraph>
			<TechStack>
				<TList>
					{technologies.map((t) => (
						<TItem key={t.id}>
							<Image src={t.icon} alt={t.title} />
							<p>{t.title}</p>
						</TItem>
					))}
				</TList>
			</TechStack>
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

const TechStack = styled.div`
	padding: 2rem 0;
`;

const TList = styled.ul`
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0;
	padding: 0;
	gap: 4rem;
`;

const TItem = styled.li`
	width: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: 0.75rem;
`;
