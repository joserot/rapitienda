import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function NoResults() {
	return (
		<div className="py-20 w-full flex flex-col justify-center items-center gap-3">
			<FontAwesomeIcon
				className="text-gray-500 text-4xl font-medium"
				icon={faMagnifyingGlass}
			/>
			<p className="text-gray-500 text-xl font-medium">No Hay Productos</p>
		</div>
	);
}
