import { createContext } from "react";
import { useState } from "react";

interface Props {
	children: JSX.Element;
}

type ColorTheme = "dark" | "light";

interface IFiltersContext {
	theme: ColorTheme;
	changeTheme: () => void;
}

const themeContext = createContext<IFiltersContext>({
	theme: "dark",
	changeTheme: () => {},
});

const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [theme, setTheme] = useState<ColorTheme>("dark");

	const changeTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	const value: IFiltersContext = {
		theme,
		changeTheme,
	};

	return (
		<themeContext.Provider value={value}>{children}</themeContext.Provider>
	);
};

export { ThemeProvider };
export default themeContext;
