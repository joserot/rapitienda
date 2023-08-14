import useTheme from "<src>/hooks/useTheme";
import useGrid from "<src>/hooks/useGrid";

interface btnsViews {
	text: any;
	value: gridType;
}

const buttons: btnsViews[] = [
	{
		text: 1,
		value: 1,
	},
	{
		text: 2,
		value: 2,
	},
	{
		text: 3,
		value: 3,
	},
];

export default function ViewsButtons() {
	const { theme } = useTheme();
	const { grid, setGrid } = useGrid();

	return (
		<div className="flex justify-center item-center gap-5">
			<span
				className={`
            text-xs 
            ${theme === "dark" && "text-white"}
            text-gray-500`}
			>
				vistas
			</span>
			{buttons.map((btn) => {
				return (
					<button
						onClick={(e) => {
							e.preventDefault();
							setGrid(btn.value);
						}}
						key={btn.value}
						className={`
                    rounded-full 
                    border-2
                    border-gray-500
                    flex
                    justify-center
                    items-center
                    text-gray-500 
                    w-7
                    h-7
                    ${grid === btn.value && "bg-gray-500 text-white"}
                    `}
					>
						{btn.text}
					</button>
				);
			})}
		</div>
	);
}
