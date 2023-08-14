import userContext from "<src>/context/userContext";
import { useContext } from "react";
import Image from "next/image";
import useTheme from "<src>/hooks/useTheme";

export default function HeroProfilePhoto() {
	const user = useContext(userContext);
	const { theme } = useTheme();

	return (
		<div className="w-auto">
			<div
				className={`
                rounded-full 
                ${user.color === 1 && "bg-amber-500"}
                w-24 
                h-24
                ${theme === "dark" && "border-black"}
                border-2
                -mt-5
                flex
                justify-center
                items-center`}
			>
				{user.logo ? (
					<Image
						src={user.logo}
						alt={user.name}
						width={96}
						height={96}
						className="w-full h-full rounded-full"
					/>
				) : (
					<span
						className="
              text-white 
              capitalize 
              text-3xl 
              font-medium"
					>
						{user.name[0]}
					</span>
				)}
			</div>
		</div>
	);
}
