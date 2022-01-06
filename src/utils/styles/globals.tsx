import styled from "styled-components";

export const Container = styled.div`
	width: 90%;
	max-width: 850px;
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
	font-size: 3.2rem;
	font-weight: 400;

	span {
		font-weight: 900;
		color: ${(props) => props.theme.colors.primaryClr};
	}
`;

export const HeroSection = styled.section`
	padding: 1rem 0;
`;

export const Paragraph = styled.p`
	padding: 1rem 0;
	font-size: 1.125rem;
	color: ${(props) => props.theme.colors.fontClr500};

	span {
		font-weight: 600;
		color: ${(props) => props.theme.colors.primaryClr};
	}

	a {
		font-weight: 600;
		color: ${(props) => props.theme.colors.primaryClr};
		cursor: pointer;
	}
`;

export const SubHeading = styled.h2`
	font-size: 2.4rem;
	color: ${(props) => props.theme.colors.primaryClr};
`;
