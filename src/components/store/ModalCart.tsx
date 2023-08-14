import CartFirstStep from "./CartFirstStep";
import CartSecondStep from "./CartSecondStep";
import { useState } from "react";
import useTheme from "<src>/hooks/useTheme";

export default function ModalCart() {
	const [step, setStep] = useState<number>(1);
	const { theme } = useTheme();

	return (
		<div
			style={{ width: "90vw", maxWidth: "50rem" }}
			className={`p-5 
        flex 
        flex-col 
        justify-center 
        items-center 
        gap-5 
         ${theme === "dark" && "text-white"}
        `}
		>
			{step === 1 && <CartFirstStep setStep={setStep} />}
			{step === 2 && <CartSecondStep setStep={setStep} />}
		</div>
	);
}
