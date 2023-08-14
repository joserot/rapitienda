import { createContext } from "react";
import { useState } from "react";

interface Props {
	children: JSX.Element;
}

interface IFiltersContext {
	grid: gridType;
	setGrid: (grid: gridType) => void;
}

const gridContext = createContext<IFiltersContext>({
	grid: 1,
	setGrid: () => {},
});

const GridProvider: React.FC<Props> = ({ children }) => {
	const [grid, setGrid] = useState<gridType>(1);

	const value: IFiltersContext = {
		grid,
		setGrid,
	};

	return <gridContext.Provider value={value}>{children}</gridContext.Provider>;
};

export { GridProvider };
export default gridContext;
