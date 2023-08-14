import { createContext } from "react";
import { useState } from "react";

interface Props {
	children: JSX.Element;
}

interface filter {
	category: string;
	order: string;
}

interface IFiltersContext {
	filters: filter;
	setCategory: (category: string) => void;
	setOrder: (order: string) => void;
	filterProducts: (product: Product[]) => Product[] | undefined;
}

const filtersContext = createContext<IFiltersContext>({
	filters: { category: "", order: "" },
	setCategory: () => {},
	setOrder: () => {},
	filterProducts: (product: Product[]) => [],
});

const FiltersProvider: React.FC<Props> = ({ children }) => {
	const [filters, setFilters] = useState<filter>({
		category: "all",
		order: "default",
	});

	const setCategory = (category: string) => {
		const newFilters: filter = { ...filters };
		newFilters.category = category;

		setFilters(newFilters);
	};

	const setOrder = (order: string) => {
		const newFilters: filter = { ...filters };
		newFilters.order = order;

		setFilters(newFilters);
	};

	const orderProducts = (products: Product[]) => {
		// Los productos que no tienen precio los pongo siempre al final
		const productsWithOutPrice = products.filter((products) => !products.price);

		if (filters.order === "default") {
			return products;
		} else if (filters.order === "min") {
			const sortedProducts = products
				.filter((product) => product.price !== null)
				.sort(
					(a, b) =>
						(a.price ?? Number.MAX_VALUE) - (b.price ?? Number.MAX_VALUE),
				);
			return sortedProducts.concat(productsWithOutPrice);
		} else if (filters.order === "max") {
			const sortedProducts = products
				.filter((product) => product.price !== null)
				.sort(
					(a, b) =>
						(b.price ?? Number.MIN_VALUE) - (a.price ?? Number.MIN_VALUE),
				);
			return sortedProducts.concat(productsWithOutPrice);
		}
	};

	const filterProducts = (products: Product[]) => {
		const productsFiltered = products.filter((product) => {
			// Solo muestro los productos que no tienen categoria cuando la categoria es "all"
			if (filters.category !== "all") {
				if (!product.tags) return;
			}

			return (
				filters.category === "all" ||
				!product.tags ||
				product.tags.includes(filters.category)
			);
		});

		return orderProducts(productsFiltered);
	};

	const value: IFiltersContext = {
		filters,
		setCategory,
		setOrder,
		filterProducts,
	};

	return (
		<filtersContext.Provider value={value}>{children}</filtersContext.Provider>
	);
};

export { FiltersProvider };
export default filtersContext;
