import { useContext } from "react";
import themeContext from "<src>/context/themeContext";

export default function useTheme() {
	const context = useContext(themeContext);

	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}

	return context;
}
