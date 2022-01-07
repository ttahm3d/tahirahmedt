import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { BlogType } from "../../utils/types/types";
import { Paragraph } from "../../utils/styles/globals";
import { display } from "../../utils/styles/devices";

const Blog: React.FC<BlogType> = ({ title, slug, coverImage }) => {
	return (
		<BlogWrapper>
			<Image src={coverImage} alt={title} width={290} height={180} />
			<Paragraph>
				<a
					href={`https://blog.tahirahmedt.com/` + slug}
					target="_black"
					rel="noreferrer noopener">
					{title}
				</a>
			</Paragraph>
		</BlogWrapper>
	);
};

const BlogWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 0.75rem;
	border-radius: 0.5rem;
	background: ${(props) => props.theme.colors.bgClr700};

	img {
		border-radius: 0.5rem;
	}

	p {
		padding: 0.5rem 0;
		margin: 0;
	}

	a {
		color: ${(props) => props.theme.colors.fontClr700};

		:hover {
			text-decoration: underline;
		}
	}

	@media ${display.laptop} {
		flex-direction: column;
		width: 18em;

		p {
			padding: 0.5rem 0;
		}
	}
`;

export default Blog;
