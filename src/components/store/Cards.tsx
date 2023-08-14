import Card from "./Card";
import NoResults from "./NoResults";
import useGrid from "<src>/hooks/useGrid";

interface Props {
	products: Product[] | undefined;
}

export default function Cards({ products }: Props) {
	const { grid } = useGrid();

	return (
		<section className="mt-10 w-full">
			{products && products.length ? (
				<div
					className={`
            ${grid === 1 && "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}
            ${grid === 2 && "grid-cols-1 md:grid-cols-3 xl:grid-cols-4"}
            ${grid === 3 && "grid-cols-2 md:grid-cols-4 xl:grid-cols-5"}
            w-full             
            grid 
            gap-5
   `}
				>
					{products.map((product) => {
						return <Card key={product.name} product={product} />;
					})}
				</div>
			) : (
				<NoResults />
			)}
		</section>
	);
}
