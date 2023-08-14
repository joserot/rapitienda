import userContext from "<src>/context/userContext";
import { useContext } from "react";
import useCart from "<src>/hooks/useCart";
import Image from "next/image";

interface Props {
	setStep: (step: number) => void;
}

export default function CartFirstStep({ setStep }: Props) {
	const user = useContext(userContext);
	const { cart, addToCart, removeToCart } = useCart();

	const totalPrice = cart.reduce((accumulator, currentItem) => {
		if (!currentItem?.quantity || !currentItem.price) return accumulator;

		return accumulator + currentItem.quantity * currentItem.price;
	}, 0);

	const addOneProduct = (product: Product) => {
		addToCart(product, 1);
	};

	const removeOneProduct = (product: Product) => {
		removeToCart(product, 1);
	};

	return (
		<>
			<h4 className="text-2xl font-semibold">Tu Pedido</h4>
			<div
				className="border-2 
              border-gray-300  
              rounded 
              flex 
              flex-col 
              gap-4
              p-2
              w-full
              "
			>
				<div className="flex flex-col gap-5">
					{cart.map((item, i) => {
						const lastItem = i === cart.length - 1;
						return (
							<div
								className={`${
									!lastItem && "border-b-2 border-gray-300 pb-5"
								}  flex flex-col gap-1`}
								key={item.id}
							>
								<div className="flex justify-between items-center">
									<span className="font-semibold text-xl md:text-3xl capitalize">
										{item.name}
									</span>

									{item.price ? (
										<span className="text-2xl">
											{"$ " + item.price * item.quantity}
										</span>
									) : (
										<span> Precio a consultar</span>
									)}
								</div>

								<div className="flex items-center  gap-4">
									<button
										onClick={() => {
											const product: Product = {
												image: item.image,
												name: item.name,
												price: item.price,
												tags: null,
												description: null,
												types: null,
												discount: null,
												images: null,
												id: item.id,
												userId: 1,
											};
											removeOneProduct(product);
										}}
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
									<span>{item.quantity}</span>
									<button
										onClick={() => {
											const product: Product = {
												image: item.image,
												name: item.name,
												price: item.price,
												tags: null,
												description: null,
												types: null,
												discount: null,
												images: null,
												id: item.id,
												userId: 1,
											};
											addOneProduct(product);
										}}
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
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex w-full justify-between items-center">
				<span className="text-3xl font-semibold">Total</span>
				<span className="text-3xl font-semibold">{"$" + totalPrice}</span>
			</div>
			<button
				onClick={() => {
					setStep(2);
				}}
				className={`
                text-white  
                ${user.color === 1 && "bg-amber-500"}    
                w-full
                py-2
                rounded-b  
                ${user.color === 1 && "hover:bg-amber-700"}   
                transition-colors`}
			>
				Iniciar Compra
			</button>
		</>
	);
}
