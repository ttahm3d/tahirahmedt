import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  max-width: 56.25em;
  margin: 0 auto;
`;

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FlexBox = styled.div`
  display: flex;
`;

export const CenterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 400;

  span {
    font-size: 3.4rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors.blue10};
  }
`;

export const HeroSection = styled.section`
  word-break: break-word;
  padding: 1rem 0;
`;

export const Paragraph = styled.p`
  padding: 0 0 1rem;
  text-align: justify;

  strong {
    font-weight: 700;
    color: ${(props) => props.theme.colors.slate12};
  }

  a {
    font-weight: 600;
    color: ${(props) => props.theme.colors.blue10};
    cursor: pointer;
  }
`;

export const SubHeading = styled.h2`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.slate12};
`;
