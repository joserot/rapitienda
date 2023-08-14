"use client";

import userContext from "<src>/context/userContext";
import { useContext } from "react";

interface Props {
	tags: string[] | null;
}

export default function CardTags({ tags }: Props) {
	const user = useContext(userContext);

	return (
		<div className="flex w-full flex-wrap gap-x-3 gap-y-1">
			{tags &&
				tags.length &&
				tags.map((tag, i) => {
					return (
						<span
							key={i}
							className={`
                  ${user.color === 1 && "bg-amber-500"}
                  rounded 
                  text-white 
                  py-1 
                  px-2 
                  text-xs 
                  capitalize`}
						>
							{tag}
						</span>
					);
				})}
		</div>
	);
}
