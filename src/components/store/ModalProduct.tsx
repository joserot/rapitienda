import Image from "next/image";
import CardTags from "./CardTags";
import userContext from "<src>/context/userContext";
import { useContext } from "react";
import getDiscount from "<src>/functions/getDiscount";
import { useState } from "react";
import ProductImages from "./ProductImages";
import useCart from "<src>/hooks/useCart";
import useTheme from "<src>/hooks/useTheme";

interface Props {
	closeModal: () => void;
	product: Product;
}

export default function ModalProduct({ closeModal, product }: Props) {
	const [count, setCount] = useState<number>(1);
	const [image, setImage] = useState<string>(
		product.image ? product.image : "/placeholder.webp",
	);
	const user = useContext(userContext);
	const { addToCart } = useCart();
	const { theme } = useTheme();

	let price;
	if (product.price) {
		price = product.discount
			? getDiscount(product.price, product.discount)
			: product.price;
	}

	const handleCount = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target: any = e.target;
		if (target.name === "more") {
			setCount(count + 1);
		} else if (target.name === "less" && count >= 2) {
			setCount(count - 1);
		}
	};

	const addProduct = () => {
		addToCart(product, count);
		closeModal();
	};

	return (
		<div className="w-full flex flex-col gap-3 h-full">
			<div className="flex-grow flex flex-col gap-3">
				<Image
					src={image}
					alt={product.name}
					width={500}
					height={500}
					className="object-cover w-full h-96"
				/>
				<ProductImages changeImage={setImage} product={product} />
				<div className="p-3 flex flex-col gap-5">
					<h3
						className={`
            ${theme === "dark" && "text-white"}
                text-3xl 
                font-semibold 
                capitalize`}
					>
						{product.name}
					</h3>
					{product.description && (
						<p className="text-xs text-gray-500">{product.description}</p>
					)}
					<CardTags tags={product.tags} />
					<h4
						className={`
                ${user.color === 1 && "text-amber-500"}   
                font-medium`}
					>
						{price ? "$ " + price * count : "Precio a Consultar"}
					</h4>
				</div>
			</div>
			<div className="flex flex-col gap-5 justify-center items-center w-full">
				<div className="flex items-center justify-center gap-4">
					<button
						name="less"
						onClick={handleCount}
						className={`
                text-white  
                ${user.color === 1 && "bg-amber-500"}    
                w-8 
                h-8 
                rounded  
                ${user.color === 1 && "hover:bg-amber-700"}   
                transition-colors`}
					>
						-
					</button>
					<span className={`${theme === "dark" && "text-white"}`}>{count}</span>
					<button
						name="more"
						onClick={handleCount}
						className={`
                text-white  
                ${user.color === 1 && "bg-amber-500"}    
                w-8 
                h-8 
                rounded  
                ${user.color === 1 && "hover:bg-amber-700"}   
                transition-colors`}
					>
						+
					</button>
				</div>
				<button
					onClick={addProduct}
					className={`
                text-white  
                ${user.color === 1 && "bg-amber-500"}    
                w-full
                py-2
                rounded-b  
                ${user.color === 1 && "hover:bg-amber-700"}   
                transition-colors`}
				>
					Agregar
				</button>
			</div>
		</div>
	);
}
