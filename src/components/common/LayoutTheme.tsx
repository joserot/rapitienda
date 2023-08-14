import { ThemeProvider } from "<src>/context/themeContext";

export default function LayoutTheme({
	childeen,
}: {
	childeen: JSX.Element | JSX.Element[];
}) {
	return (
		<ThemeProvider>
			<div>{childeen}</div>
		</ThemeProvider>
	);
}
