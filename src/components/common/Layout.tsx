import { Poppins } from "next/font/google";
import useTheme from "<src>/hooks/useTheme";

const poppins = Poppins({
	weight: ["300", "400", "500", "700", "900"],
	style: ["normal", "italic"],
	subsets: ["latin"],
});

interface Props {
	children: JSX.Element;
}

export default function Layout({ children }: Props) {
	const { theme } = useTheme();

	return (
		<>
			<div
				className={`
        ${theme === "dark" && "bg-slate-800"}
         ${poppins.className}`}
			>
				<div
					className={`
             w-11/12
             max-w-screen-xl
             mx-auto
             ${theme === "dark" && "bg-slate-800"}`}
				>
					{children}
				</div>
			</div>
		</>
	);
}
