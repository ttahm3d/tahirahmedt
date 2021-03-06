import Head from "next/head";
import styled from "styled-components";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { BlogType } from "../src/utils/types/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Blog from "../src/components/Blog/Blog";
import {
  Container,
  Title,
  SubHeading,
  HeroSection,
  Paragraph,
} from "../styles/globals";

import { display } from "../styles/devices";

const Home: InferGetServerSidePropsType<typeof getServerSideProps> = ({
  blogsList,
}: {
  blogsList: BlogType[];
}) => {
  return (
    <Container>
      <Head>
        <title>Tahir Ahmed</title>
        <link rel="icon" href="./logo.svg" />
      </Head>
      <HeroSection>
        <Title>
          Hi, I&apos;m <br />
          <span>Tahir Ahmed</span>👋
        </Title>
      </HeroSection>
      <Paragraph>
        I&apos;m a Frontend Developer from India currently working as&nbsp;
        <strong>Associate 2</strong> at&nbsp;
        <strong>Pricewaterhouse Coopers</strong>. I started off as a Dotnet
        Developer, then moved into a Devops role where I was&nbsp;
        <strong>Rearchitecting</strong> apps to make them&nbsp;
        <strong> cloud compatible</strong> and deploying to&nbsp;
        <strong>Microsoft Azure</strong>.
      </Paragraph>
      <PrimaryButton
        href="https://drive.google.com/file/d/1xrrJbpRbTasWyrFXoHzVoN2Zke2N02WT/view?usp=sharing"
        target="_black">
        Download Resume
      </PrimaryButton>
      <SubHeading>Recent Blogs</SubHeading>
      <BlogsSection>
        {blogsList.map((blog) => (
          <Blog key={blog._id} {...blog} />
        ))}
      </BlogsSection>
      <SecondaryButton href="https://blog.tahirahmedt.com" target="_blank">
        Read all blogs
      </SecondaryButton>
      <Paragraph />
    </Container>
  );
};

export default Home;

const PrimaryButton = styled.a`
  padding: 1rem 2rem;
  display: inline-block;
  background-color: ${(props) => props.theme.colors.violet9};
  border-radius: 0.25rem;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.violet7};
  font-weight: 500;

  :active {
    background-color: ${(props) => props.theme.colors.violet6};
  }
`;

const SecondaryButton = styled.a`
  padding: 0.5rem 0.75rem;
  display: inline-block;
  height: 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.violet7};
  background-color: ${(props) => props.theme.colors.violet4};
  color: ${(props) => props.theme.colors.violet11};
  border-radius: 0.25rem;

  :hover {
    color: ${(props) => props.theme.colors.violet9};
    background-color: ${(props) => props.theme.colors.violet3};
  }
`;

const BlogsSection = styled.section`
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  gap: 0.75rem;

  @media ${display.laptop} {
    flex-direction: row;
  }
`;

export const getServerSideProps: GetServerSideProps = async () => {
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
              brief
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
