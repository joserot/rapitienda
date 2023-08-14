import userContext from "<src>/context/userContext";
import { useContext } from "react";
import useCart from "<src>/hooks/useCart";
import Whatsapp from "../icons/Whatsapp";
import getMessage from "<src>/functions/getMessage";
import useTheme from "<src>/hooks/useTheme";

interface Props {
	setStep: (step: number) => void;
}

export default function CartSecondStep({ setStep }: Props) {
	const user = useContext(userContext);
	const { cart } = useCart();
	const { theme } = useTheme();

	const totalPrice = cart.reduce((accumulator, currentItem) => {
		if (!currentItem?.quantity || !currentItem.price) return accumulator;

		return accumulator + currentItem.quantity * currentItem.price;
	}, 0);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const target: any = e.target;

		const name = target.name.value;
		const pay = target.pay.value;
		const delivery = target.delivery.value;
		const location = target.location.value;

		if (!name || !pay || !delivery) return;

		if (delivery === "Entrega a Domicilio" && !location) return;

		const message = getMessage(cart, name, pay, delivery, totalPrice, location);

		window.open(`https://wa.me/${user.whatsapp}?text=${message}`, "_blank");
	};

	return (
		<>
			<h4 className="text-2xl font-semibold">Completa tu pedido</h4>
			<form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
				<div
					className="border-2 
              border-gray-300  
              rounded 
              flex 
              flex-col 
              gap-4
              px-5
              py-10
              w-full
              "
				>
					<div className="flex flex-col gap-7">
						{/* NOMBRE */}
						<label className="flex flex-col">
							Nombre*
							<input
								required
								className={`
                ${theme === "dark" && "text-black"}
                    outline-none 
                    border-2 
                    border-gray-300 
                    rounded 
                    px-2 h-10`}
								type="text"
								placeholder="Maillen Ayala"
								name="name"
							/>
						</label>
						{/* METODOS DE PAGO */}
						<label className="flex flex-col">
							Método de Pago*
							<label className="flex gap-2 text-gray-500">
								<input type="radio" name="pay" value="Efectivo" />
								Efectivo
							</label>
							<label className="flex gap-2 text-gray-500">
								<input type="radio" name="pay" value="Transferencia bancaria" />
								Transferencia bancaria
							</label>
							<label className="flex gap-2 text-gray-500">
								<input type="radio" name="pay" value="Mercado Pago" />
								Mercado Pago
							</label>
						</label>
						{/* ENTREGA */}
						<label className="flex flex-col">
							Entrega*
							<label className="flex gap-2 text-gray-500">
								<input type="radio" name="delivery" value="Retiro en local" />
								Retiro en local
							</label>
							<label className="flex gap-2 text-gray-500">
								<input
									type="radio"
									name="delivery"
									value="Entrega a Domicilio"
								/>
								Entrega a Domicilio ({"+$" + user.delivery})
							</label>
						</label>
						{/* DOMICILIO */}
						<label className="flex flex-col">
							Domicilio de entrega
							<input
								className={`
                ${theme === "dark" && "text-black"}
                    outline-none 
                    border-2 
                    border-gray-300 
                    rounded 
                    px-2 h-10`}
								type="text"
								placeholder="Av. Uruguay 4915"
								name="location"
							/>
						</label>
					</div>
				</div>
				<div className="flex w-full justify-between items-center">
					<span className="text-3xl font-semibold">Total</span>
					<span className="text-3xl font-semibold">{"$" + totalPrice}</span>
				</div>
				<button
					className={`
                flex
                justify-center
                items-center
                gap-2
                text-white  
                ${user.color === 1 && "bg-amber-500"}    
                w-full
                py-2
                rounded-b  
                ${user.color === 1 && "hover:bg-amber-700"}   
                transition-colors`}
				>
					<Whatsapp />
					Realizar Pedido
				</button>
			</form>
		</>
	);
}
