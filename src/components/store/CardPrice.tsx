import userContext from "<src>/context/userContext";
import { useContext } from "react";
import getDiscount from "<src>/functions/getDiscount";
import useTheme from "<src>/hooks/useTheme";

interface Props {
	product: Product;
}

export default function CardPrice({ product }: Props) {
	const user = useContext(userContext);
	const { theme } = useTheme();

	if (!product.price) {
		return (
			<h4
				className={`    
            ${user.color === 1 && "text-amber-500"}  
            font-medium`}
			>
				Precio a Consultar
			</h4>
		);
	}

	return (
		<>
			{!product.discount ? (
				<h4
					className={`    
            ${user.color === 1 && "text-amber-500"}  
            font-medium`}
				>
					{"$ " + product.price}
				</h4>
			) : (
				<div className="flex gap-2">
					<h5
						className={`
              line-through 
               ${theme === "dark" && "text-white"}
              text-gray-500`}
					>
						{"$ " + product.price}
					</h5>
					<h4
						className={`    
            ${user.color === 1 && "text-amber-500"}  
            font-medium`}
					>
						{product.price &&
							"$ " + getDiscount(product.price, product.discount)}
					</h4>
				</div>
			)}
		</>
	);
}
