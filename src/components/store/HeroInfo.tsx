import HeroRRSS from "./HeroRRSS";
import HeroProfilePhoto from "./HeroProfilePhoto";
import HeroProfileData from "./HeroProfileData";
import userContext from "<src>/context/userContext";
import { useContext } from "react";

export default function HeroInfo() {
	const user = useContext(userContext);

	return (
		<section className=" md:px-3 flex gap-5 flex-col justify-center items-center">
			<div className="w-full  grid grid-cols-12 grid-rows-12">
				<HeroProfilePhoto />
				<HeroProfileData />
				<HeroRRSS />
			</div>
			<div
				className={`
            w-full 
            ${user.color === 1 && "bg-amber-200"}
            p-2 
            rounded`}
			>
				{user.secondDescription && (
					<p
						className={`
              text-center 
              ${user.color === 1 && "text-amber-700"}
              capitalize
              `}
					>
						{user.secondDescription}
					</p>
				)}
			</div>
		</section>
	);
}
