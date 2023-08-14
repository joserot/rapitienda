import userContext from "<src>/context/userContext";
import { useContext } from "react";
import filtersContext from "<src>/context/filtersContext";
import useTheme from "<src>/hooks/useTheme";

export default function FiltersSelects() {
	const user = useContext(userContext);
	const { theme } = useTheme();
	const { setCategory, setOrder } = useContext(filtersContext);

	const handleCategory = (e: React.SyntheticEvent<HTMLSelectElement>) => {
		e.preventDefault();

		const target: any = e.target;

		setCategory(target.value);
	};

	const handleOrder = (e: React.SyntheticEvent<HTMLSelectElement>) => {
		e.preventDefault();

		const target: any = e.target;

		setOrder(target.value);
	};

	return (
		<div className="mt-5 w-full flex justify-between items-center gap-5 flex-wrap">
			<label
				className={`
              flex 
              flex-col 
              ${theme === "dark" && "text-white"}
              text-gray-500`}
			>
				Ordenar Por:
				<select
					onChange={handleOrder}
					className="px1 py-2 capitalize text-gray-500"
					name=""
				>
					<option value="default">Por Defecto</option>
					<option value="min">Menor Precio</option>
					<option value="max">Mayor Precio</option>
				</select>
			</label>

			<label
				className={`
              flex 
              flex-col 
              ${theme === "dark" && "text-white"}
              text-gray-500`}
			>
				Categorías:
				<select
					onChange={handleCategory}
					className="px1 py-2 capitalize text-gray-500"
					name=""
				>
					<option value="all">Todos</option>
					{user.categories &&
						user.categories.length &&
						user.categories.map((category, i) => {
							return (
								<option className="capitalize" key={i} value={category}>
									{category}
								</option>
							);
						})}
				</select>
			</label>
		</div>
	);
}
