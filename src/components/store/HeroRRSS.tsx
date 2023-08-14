import Whatsapp from "../icons/Whatsapp";
import Instagram from "../icons/Instagram";
import Facebook from "../icons/Facebook";
import Twitter from "../icons/Twitter";
import userContext from "<src>/context/userContext";
import { useContext } from "react";

interface buttons {
	href: string;
	icon: JSX.Element;
}

export default function HeroRRSS() {
	const user = useContext(userContext);

	const buttons: buttons[] = [];

	user.whatsapp && buttons.push({ href: "#!", icon: <Whatsapp /> });
	user.instagram && buttons.push({ href: "#!", icon: <Instagram /> });
	user.facebook && buttons.push({ href: "#!", icon: <Facebook /> });
	user.twitter && buttons.push({ href: "#!", icon: <Twitter /> });

	return (
		<div
			className="
            w-auto
            col-start-12
            row-start-1
            flex 
            justify-end 
            items-start 
            mt-4"
		>
			<div className="flex gap-2">
				{buttons.map((btn, i) => {
					return (
						<a
							className={`
                    ${user.color === 1 && "bg-amber-500"}
                    rounded-full 
                    p-1 
                    ${user.color === 1 && "hover:bg-amber-700"}
                    transition-colors`}
							key={i}
							href={btn.href}
						>
							{btn.icon}
						</a>
					);
				})}
			</div>
		</div>
	);
}
