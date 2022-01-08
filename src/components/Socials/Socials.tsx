import React from "react";
import styled from "styled-components";
import { SiTwitter, SiInstagram, SiLinkedin, SiHashnode } from "react-icons/si";
import { IconType } from "react-icons";

type Socials = {
	id: number;
	url: string;
	title: string;
	icon: IconType;
};

const socialsList: Socials[] = [
	{
		id: 1,
		url: "https://twitter.com/ttahm3d",
		title: "Twitter",
		icon: SiTwitter,
	},
	{
		id: 2,
		url: "https://www.linkedin.com/in/tahirahmedt/",
		title: "LinkedIn",
		icon: SiLinkedin,
	},
	{
		id: 3,
		url: "https://www.instagram.com/tahirahmedt",
		title: "Instagram",
		icon: SiInstagram,
	},
	{
		id: 4,
		url: "https://blog.tahirahmedt.com",
		title: "Hashnode",
		icon: SiHashnode,
	},
];

const Socials: React.FC = () => {
	return (
		<SocialsList>
			{socialsList.map((s) => (
				<Social key={s.id}>
					<a href={s.url}>{<s.icon />}</a>
				</Social>
			))}
		</SocialsList>
	);
};

export default Socials;

const SocialsList = styled.ul`
	list-style: none;
	display: flex;
	justify-content: center;
	padding: 0 0 2rem;
	margin: 0;
	gap: 1rem;
`;

const Social = styled.li`
	font-size: 1.5rem;
	a {
		color: ${(props) => props.theme.colors.primaryClrLt};
	}
`;
