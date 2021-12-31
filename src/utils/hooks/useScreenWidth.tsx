import { useEffect, useState } from "react";

const useScreenWidth = () => {
	const [screenSize, setScreenSize] = useState<[number, number]>([0, 0]);

	useEffect(() => {
		function updateScreenSize() {
			setScreenSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateScreenSize);
		updateScreenSize();
		return () => window.removeEventListener("resize", updateScreenSize);
	}, []);

	return screenSize;
};

export { useScreenWidth };
