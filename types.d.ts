type Payment = "transferencia" | "efectivo" | "mercado pago";

type gridType = 1 | 2 | 3;

type ArrayOfStringsMaxThree = [
	string,
	string extends undefined ? never : string,
	string extends undefined ? never : string,
];

interface CartProduct {
	name: string;
	quantity: number;
	price: number | null;
	image: string | null;
	id: number;
}

interface Product {
	image: string | null;
	name: string;
	price: number | null;
	tags: string[] | null;
	description: string | null;
	types: string[] | null;
	discount: number | null;
	images: ArrayOfStringsMaxThree | null;
	id: number;
	userId: number;
}

interface User {
	logo: string | undefined;
	frontPage: string | null;
	username: string;
	name: string;
	description: string | undefined;
	secondDescription: string | null;
	location: string | null;
	type: string;
	whatsapp: number | null;
	instagram: string | null;
	facebook: string | null;
	twitter: string | null;
	categories: string[];
	payment: Payment[];
	color: number;
	delivery: number | null;
	verified: boolean;
	id: number;
}
