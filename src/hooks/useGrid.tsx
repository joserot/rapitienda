import { useContext } from "react";
import gridContext from "<src>/context/gridContext";

export default function useGrid() {
	const context = useContext(gridContext);

	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}

	return context;
}
