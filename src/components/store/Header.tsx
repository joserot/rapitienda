import ToggleDarkMode from "./ToggleDarkMode";
import ViewsButtons from "./ViewsButtons";
import useTheme from "<src>/hooks/useTheme";

export default function Header() {
	const { theme } = useTheme();

	return (
		<header
			className={`
            flex 
            justify-center 
            px-3 
             ${theme === "dark" && "bg-slate-800"}
            w-full 
            h-14`}
		>
			<div className="flex justify-between items-center w-full">
				<ToggleDarkMode />
				<ViewsButtons />
			</div>
		</header>
	);
}
