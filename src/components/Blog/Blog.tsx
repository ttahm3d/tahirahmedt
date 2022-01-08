import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { BlogType } from "../../utils/types/types";
import { Paragraph } from "../../utils/styles/globals";
import { display } from "../../utils/styles/devices";

const Blog: React.FC<BlogType> = ({ title, slug, coverImage, brief }) => {
	return (
		<BlogWrapper>
			<div>
				<Image src={coverImage} alt={title} width={500} height={450} />
			</div>
			<div>
				<Paragraph>
					<a
						href={`https://blog.tahirahmedt.com/` + slug}
						target="_black"
						rel="noreferrer noopener">
						{title}
					</a>
				</Paragraph>
				<small>{brief}</small>
			</div>
		</BlogWrapper>
	);
};

const BlogWrapper = styled.div`
	display: flex;
	flex-direction: row;
	padding: 0.75rem;
	border-radius: 0.5rem;
	background: ${(props) => props.theme.colors.bgClr700};

	> div {
		flex: 1;
	}

	div {
		display: flex;
		flex-direction: column;
	}

	img {
		border-radius: 0.5rem;
		width: 50%;
	}

	p {
		padding: 0 0.5rem 0;
		margin: 0;
	}

	small {
		padding: 1rem 0.5rem 0;
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

		small {
			display: none;
		}
	}
`;

export default Blog;
