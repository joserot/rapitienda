import HeroInfo from "./HeroInfo";
import userContext from "<src>/context/userContext";
import { useContext } from "react";

export default function Hero() {
	const user = useContext(userContext);

	return (
		<article className="w-full">
			<section
				className={`
            h-32
            md:h-44
            ${user.color === 1 && "bg-amber-500"}
            w-full
            rounded
      `}
			></section>
			<HeroInfo />
		</article>
	);
}
