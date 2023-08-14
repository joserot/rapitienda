import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import FiltersSelects from "./FiltersSelects";
import userContext from "<src>/context/userContext";
import { useContext } from "react";

export default function Filters() {
	const user = useContext(userContext);

	return (
		<section className="flex flex-col mt-10">
			<div className=" flex items-center gap-2">
				<div
					className={`w-full
            relative 
            border-2 
            ${user.color === 1 && "border-amber-500"}
            h-10 
            flex 
            items-center 
            rounded`}
				>
					<FontAwesomeIcon
						className="absolute left-1 text-gray-500 w-4"
						icon={faMagnifyingGlass}
					/>
					<input className="w-full pl-7 h-full outline-none" type="text" />
				</div>
				<button
					className={`  
          ${user.color === 1 && "bg-amber-500"}  
          ${user.color === 1 && "hover:bg-amber-700"} 
          text-white 
          px-5 
          py-2 
          rounded   
          transition-colors`}
				>
					Buscar
				</button>
			</div>
			<FiltersSelects />
		</section>
	);
}
