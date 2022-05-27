import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Container,
  HeroSection,
  Paragraph,
  CenterContent,
  Title,
} from "../styles/globals";
import styled from "styled-components";

type ProjectType = {
  id: number;
  name: string;
  gitUrl: string;
  url: string;
  techStack: string[];
  image: string;
  description: string;
  features?: string[];
};

const projectsList: ProjectType[] = [
  {
    id: 1,
    name: "Chunks UI",
    gitUrl: "https://github.com/ttahm3d/chunks",
    url: "https://chunksui.netlify.app",
    techStack: ["HTML", "CSS", "JavaScript"],
    image:
      "https://res.cloudinary.com/dut75albw/image/upload/v1653661154/tahirahmedt/ChunksUI.png",
    description:
      "A UI Component Library that provides utility classes for you to create your User Interfaces at Rocket speed",
    features: ["Supports Dark Mode and Light Mode", "Lightweight"],
  },
  {
    id: 2,
    name: "Aegis Store",
    gitUrl: "https://github.com/ttahm3d/aegis-store-mock",
    url: "https://aegis-store-mock.vercel.app/",
    techStack: ["React", "Mirage JS", "CSS Modules"],
    image:
      "https://res.cloudinary.com/dut75albw/image/upload/v1653661154/tahirahmedt/AegisStore.png",
    description: "Dota 2 Merch and Gaming Accessories Store",
    features: [
      "Create account",
      "View products",
      "Add products to wishlist and cart",
      "Checkout the cart contents",
    ],
  },
  {
    id: 3,
    name: "AegisTube",
    gitUrl: "https://github.com/ttahm3d/aegistube",
    url: "https://aegistube.vercel.app/",
    techStack: ["React", "Mirage JS", "CSS Modules"],
    image:
      "https://res.cloudinary.com/dut75albw/image/upload/v1653661154/tahirahmedt/AegisTube.png",
    description: "Dota 2 Merch and Gaming Accessories Store",
    features: [
      "Create account",
      "View videos",
      "Viewed videos are added to History",
      "Create playlists",
      "Add / Remove video to / from Playlists",
      "Like / Dislike videos",
    ],
  },
  {
    id: 4,
    name: "NoteIt",
    gitUrl: "https://github.com/ttahm3d/noteit",
    url: "https://note--it.vercel.app/",
    techStack: ["React", "Supabase"],
    image:
      "https://res.cloudinary.com/dut75albw/image/upload/v1653661154/tahirahmedt/NoteIt.png",
    description: "One place for all your note taking needs",
    features: [
      "Realtime Sync",
      "Secure with Row Level Security in DB",
      "Add & Edit Notes",
      "Persisting Dark Mode",
    ],
  },
];

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
      <ProjectsWrapper>
        {projectsList.map(
          ({
            id,
            name,
            techStack,
            gitUrl,
            url,
            image,
            description,
            features,
          }) => (
            <Project key={id}>
              <div className="image--container">
                <Image src={image} alt={name} width="900" height="600" />
              </div>
              <div className="description--container">
                <div className="title">{name}</div>
                <div className="description">{description}</div>
                <div>
                  <ul className="links">
                    <li className="link secondary">
                      <a
                        href={gitUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        Github
                      </a>
                    </li>
                    <li className="link primary">
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        Live App
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="techstack">
                  TechStack:
                  {techStack.map((tech) => (
                    <div key={tech} className="tech">
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="features">
                  Features
                  {features?.map((feature) => (
                    <div className="feature">{feature}</div>
                  ))}
                </div>
              </div>
            </Project>
          )
        )}
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;

const ProjectsWrapper = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  padding: 2rem 0;
`;

const Project = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: ${({ theme }) => {
    if (theme.title === "light") {
      return `${theme.colors.slate3}`;
    }
    if (theme.title === "dark") {
      return `${theme.colors.indigo2}`;
    }
  }};
  border: 1px solid
    ${({ theme }) => {
      if (theme.title === "light") {
        return `${theme.colors.slate7}`;
      }
      if (theme.title === "dark") {
        return `${theme.colors.indigo7}`;
      }
    }};

  .image--container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .description--container {
    .title {
      font-size: 2rem;
      font-weight: 600;
      color: ${(props) => props.theme.colors.slate12};
      letter-spacing: -0.55px;
    }

    .description {
      color: ${(props) => props.theme.colors.slate11};
    }

    .links {
      display: flex;
      list-style: none;
      padding: 0;
      gap: 1rem;

      .link {
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
      }

      .primary {
        background-color: ${(props) => props.theme.colors.orange9};
        color: ${(props) => props.theme.colors.white};
      }

      .secondary {
        background-color: ${(props) => props.theme.colors.orange3};
        border: 1px solid ${(props) => props.theme.colors.orange7};
        color: ${(props) => props.theme.colors.orange9};
      }
    }

    .techstack {
      display: flex;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
      color: ${(props) => props.theme.colors.blue9};
      padding: 0.5rem 0;
    }

    .tech {
      background-color: ${(props) => props.theme.colors.blue3};
      color: ${(props) => props.theme.colors.blue9};
      border: 1px solid ${(props) => props.theme.colors.blue9};
      padding: 0.25rem 0.75rem;
      border-radius: 10rem;
      font-size: 14px;
    }

    .features {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.colors.mauve12};
    }

    .feature {
      color: ${(props) => props.theme.colors.mauve11};
    }

    .feature::before {
      content: ">";
      padding-right: 0.5rem;
      color: ${(props) => props.theme.colors.indigo9};
    }
  }
`;
