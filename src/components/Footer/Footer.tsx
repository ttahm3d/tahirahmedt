import styled from "styled-components";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import { Container, CenterContent } from "../../../styles/globals";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterList>
          <FLink href="/">Home</FLink>
          <FLink href="/about">About</FLink>
          <FLink href="/projects">Projects</FLink>
        </FooterList>
        <CenterContent>
          <p>&copy; 2022 &nbsp; Tahir Ahmed T</p>
        </CenterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  border-top: 1px solid ${(props) => props.theme.colors.bgClr700};
  margin-top: auto;
  padding: 2rem 0;
`;

const FooterList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const FLink = styled(Link)`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.fontClr700};
`;
