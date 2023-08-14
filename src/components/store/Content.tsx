import Cards from "./Cards";
import Filters from "./Filters";
import products from "<src>/assets/products";
import filtersContext from "<src>/context/filtersContext";
import { useContext } from "react";

export default function Content() {
	const { filterProducts } = useContext(filtersContext);

	return (
		<article className="w-full">
			<Filters />
			<Cards products={filterProducts(products)} />
		</article>
	);
}
