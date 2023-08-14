import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useState } from "react";

export default function Register() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const register = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email || !password) return;
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);

		try {
			if (response.operationType === "signIn") {
				console.log(response);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-3xl font-semibold mb-10 mt-10">Registrarse</h1>
				<form
					onSubmit={register}
					className="
              flex 
              flex-col 
              items-center 
              justify-center 
              border-2 
              border-black
              w-min
              mx-auto
              p-4
              rounded
              gap-2"
				>
					<label className="flex flex-col items-center justify-center">
						Email
						<input
							className="text-black border-2 border-black"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
						/>
					</label>
					<label className="flex flex-col items-center justify-center">
						Contraseña
						<input
							className="text-black border-2 border-black"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							type="password"
						/>
					</label>
					<button
						type="submit"
						className="submit bg-slate-500 rounded text-white py-1 px-3"
					>
						Registrarse
					</button>
				</form>
			</div>
		</main>
	);
}
