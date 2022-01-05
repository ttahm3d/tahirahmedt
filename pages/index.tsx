import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { BlogType } from "../src/utils/types/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Blog from "../src/components/Blog/Blog";
import {
	Container,
	Title,
	HeroSection,
	Paragraph,
} from "../src/utils/styles/globals";
import js from "../src/assets/js.svg";
import ts from "../src/assets/ts.svg";
import react from "../src/assets/react.svg";
import redux from "../src/assets/redux.svg";
import nextjs from "../src/assets/nextjs.svg";
import sass from "../src/assets/sass.svg";

type Tech = {
	id: number;
	title: string;
	icon: string;
};

const Home: InferGetStaticPropsType<typeof getStaticProps> = ({
	blogsList,
}: {
	blogsList: BlogType[];
}) => {
	const [tech, setTech] = useState<Tech[]>([
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
	]);

	return (
		<Container>
			<Head>
				<title>Tahir Ahmed</title>
				<link rel="icon" href="./logo.svg" />
			</Head>
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
			<BlogsSection>
				<Paragraph>
					I sometimes share my learings on my{" "}
					<a
						href="https://blog.tahirahmedt.com"
						target="_blank"
						rel="noopener noreferrer">
						Hashnode&nbsp;
					</a>
					&nbsp;Blog. Checkout my articles below.
				</Paragraph>
				{blogsList.map((blog) => (
					<Blog key={blog._id} {...blog} />
				))}
			</BlogsSection>
			<TechStack>
				<Paragraph>
					Below are the technologies that I love to work with
				</Paragraph>
				<TList>
					{tech.map((t) => (
						<TItem key={t.id}>
							<Image src={t.icon} alt={t.title} />
							<p>{t.title}</p>
						</TItem>
					))}
				</TList>
			</TechStack>
		</Container>
	);
};

export default Home;

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
	width: 12%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: 0.75rem;
`;

const PrimaryButton = styled.a`
	padding: 0.5rem 0.75rem;
	background-color: ${(props) => props.theme.colors.primaryClr};
	color: ${(props) => props.theme.colors.white};

	:hover {
		background-color: ${(props) => props.theme.colors.primaryClrDk};
	}
`;

const BlogsSection = styled.section`
	padding: 2rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.75rem;
`;

export const getStaticProps: GetStaticProps = async () => {
	const client = new ApolloClient({
		uri: "https://api.hashnode.com/",
		cache: new InMemoryCache(),
	});

	const { data } = await client.query({
		query: gql`
			{
				user(username: "tahirahmedt") {
					publication {
						posts(page: 0) {
							_id
							title
							slug
							coverImage
						}
					}
				}
			}
		`,
	});

	return {
		props: {
			blogsList: data.user.publication.posts,
		},
	};
};
