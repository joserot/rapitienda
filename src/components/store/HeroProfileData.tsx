import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import userContext from "<src>/context/userContext";
import { useContext } from "react";
import Check from "../icons/check";
import useTheme from "<src>/hooks/useTheme";

export default function HeroProfileData() {
	const user = useContext(userContext);
	const { theme } = useTheme();

	return (
		<div
			className="
            w-auto
            col-start-1 
            col-end-13
            row-start-2
            row-end-12
            md:col-start-3
            md:col-end-10
            md:row-start-1
            md:row-end-4
            xl:col-start-2
            flex 
            flex-col 
            gap-1 
            mt-4
            ml-4 "
		>
			<div
				className={`
            flex 
            items-center 
            gap-2 
            ${theme === "dark" && "text-white"}
            flex-wrap`}
			>
				<h1 className="text-xl capitalize font-semibold">{user.name}</h1>
				{user.verified && <Check color={user.color} />}
			</div>
			{user.description && (
				<p
					className={`
              text-gray-600 
              ${theme === "dark" && "text-white"}
              capitalize`}
				>
					{user.description}
				</p>
			)}
			{user.location && (
				<a
					href="#!"
					className={`
              ${user.color === 1 && "text-amber-500"}
              flex 
              gap-2`}
				>
					<FontAwesomeIcon className="w-3" icon={faLocationDot} />
					{user.location}
				</a>
			)}
		</div>
	);
}
