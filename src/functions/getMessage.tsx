export default function getMessage(
	cart: CartProduct[],
	name: string,
	pay: string,
	delivery: string,
	total: number,
	location?: string,
) {
	let message =
		"-Nombre: " +
		name +
		"\n-Método de pago: " +
		pay +
		"\n -Envío: " +
		delivery +
		"\n";

	const products = cart.map((item, i) => {
		return (
			i +
			1 +
			`) ${item.quantity} ${item.name} - $${item.price} +"\n"
    
    `
		);
	});

	const totalText = ` -TOTAL: $${total} ${location && "más envio\n"}`;

	message = message + products.join("") + totalText;

	return message.replaceAll(/\n/g, "%0A");
}
