import Image from "next/image";

interface Props {
	product: Product;
	changeImage: (image: string) => void;
}

export default function ProductImages({ product, changeImage }: Props) {
	const handleChangeImage = (
		e: React.MouseEvent<HTMLImageElement>,
		image: string,
	) => {
		e.preventDefault();
		changeImage(image);
	};

	return (
		<div
			className="
            w-full
            items-center
            justify-start
            flex
            gap-2
            cursor-pointer"
		>
			<Image
				onClick={(e) => {
					handleChangeImage(
						e,
						product.image ? product.image : "/placeholder.webp",
					);
				}}
				className="w-20 h-20 object-cover hover:scale-105 transition-transform"
				width={100}
				height={100}
				src={product.image ? product.image : "/placeholder.webp"}
				alt={product.name}
			/>
			{product.images &&
				product.images.length &&
				product.images.map((image, i) => {
					return (
						<Image
							onClick={(e) => {
								handleChangeImage(e, image);
							}}
							className="w-20 h-20 object-cover hover:scale-105 transition-transform"
							width={100}
							height={100}
							key={i}
							src={image}
							alt={product.name}
						/>
					);
				})}
		</div>
	);
}
