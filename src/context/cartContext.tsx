import { createContext } from "react";
import { useState } from "react";
import getDiscount from "<src>/functions/getDiscount";

interface Props {
	children: JSX.Element;
}

interface ICartContext {
	cart: CartProduct[];
	addToCart: (product: Product, quantity: number) => void;
	removeToCart: (product: Product, quantity: number) => void;
	clearCart: () => void;
}

const cartContext = createContext<ICartContext>({
	cart: [],
	addToCart: () => {},
	removeToCart: () => {},
	clearCart: () => {},
});

const CartProvider: React.FC<Props> = ({ children }) => {
	const [cart, setCart] = useState<CartProduct[]>([]);

	const addToCart = (product: Product, quantity: number) => {
		const price =
			product.price && product.discount
				? getDiscount(product.price, product.discount)
				: product.price;

		const existingProductIndex = cart.findIndex(
			(item) => item.id === product.id,
		);

		if (existingProductIndex >= 0) {
			const updatedCart = [...cart];
			updatedCart[existingProductIndex].quantity += quantity;
			setCart(updatedCart);
		} else {
			setCart([
				...cart,
				{
					name: product.name,
					price: price,
					image: product.image,
					id: product.id,
					quantity,
				},
			]);
		}
	};

	const removeToCart = (product: Product, quantity: number) => {
		const existingProductIndex = cart.findIndex(
			(item) => item.id === product.id,
		);

		if (cart[existingProductIndex].quantity === 1) {
			const updatedCart = [...cart];
			updatedCart.splice(existingProductIndex, 1);
			setCart(updatedCart);
		} else {
			const updatedCart = [...cart];
			updatedCart[existingProductIndex].quantity -= quantity;
			setCart(updatedCart);
		}
	};

	const clearCart = () => {
		setCart([]);
	};

	const value: ICartContext = {
		cart,
		addToCart,
		removeToCart,
		clearCart,
	};

	return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};

export { CartProvider };
export default cartContext;
