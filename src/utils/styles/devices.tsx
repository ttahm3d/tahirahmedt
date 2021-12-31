const screenSize = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptopS: "900px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const display = {
	mobileS: `(max-width: ${screenSize.mobileS})`,
	mobileM: `(max-width: ${screenSize.mobileM})`,
	mobileL: `(max-width: ${screenSize.mobileL})`,
	tablet: `(max-width: ${screenSize.tablet})`,
	laptop: `(max-width: ${screenSize.laptop})`,
	laptopS: `(max-width: ${screenSize.laptopS})`,
	laptopL: `(max-width: ${screenSize.laptopL})`,
	desktop: `(max-width: ${screenSize.desktop})`,
};
