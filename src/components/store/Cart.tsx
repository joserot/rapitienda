import Modal from "../common/Modal";
import useModal from "<src>/hooks/useModal";
import ModalCart from "./ModalCart";
import userContext from "<src>/context/userContext";
import { useContext } from "react";
import useCart from "<src>/hooks/useCart";

export default function Cart() {
	const [isOpenCart, openCart, closeCart] = useModal(false);
	const user = useContext(userContext);
	const { cart } = useCart();

	if (!cart || !cart.length) {
		return null;
	}

	const totalQuantity = cart.reduce(
		(accumulator, currentItem) => accumulator + currentItem.quantity,
		0,
	);

	const totalPrice = cart.reduce((accumulator, currentItem) => {
		if (!currentItem?.quantity || !currentItem.price) return accumulator;

		return accumulator + currentItem.quantity * currentItem.price;
	}, 0);

	return (
		<>
			<Modal
				color={user.color}
				type="default"
				isOpen={isOpenCart}
				closeModal={closeCart}
			>
				<ModalCart />
			</Modal>
			<button
				onClick={openCart}
				className={`
            sticky 
            bottom-4 
            ${user.color === 1 && "bg-amber-500"}
            ${user.color === 1 && "hover:bg-amber-700"}
            py-4
            px-6 
            flex 
            justify-center 
            items-center 
            gap-2
            rounded
            text-white
            font-semibold
            transition-colors
            shadow-xl
            animate-bounce`}
			>
				<span>Tu pedido</span>
				<span className={`  ${user.color === 1 && "bg-amber-700"} px-2 py-1`}>
					{totalQuantity + " productos"}
				</span>
				<span>{"$" + totalPrice}</span>
			</button>
		</>
	);
}
