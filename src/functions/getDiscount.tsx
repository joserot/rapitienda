export default function getDiscount(price: number, discount: number) {
	return price - (price * discount) / 100;
}
