import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import useTheme from "<src>/hooks/useTheme";

type Type = "left" | "default";

type Props = {
	type: Type;
	children: JSX.Element;
	isOpen: boolean;
	closeModal: () => void;
	color: number;
};

export default function Modal({
	children,
	type = "default",
	isOpen,
	closeModal,
	color,
}: Props) {
	const [isBrowser, setIsBrowser] = useState(false);
	const { theme } = useTheme();

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	const handleModalContainerClick = (e: React.SyntheticEvent) =>
		e.stopPropagation();

	if (!isBrowser || !isOpen) return null;

	const modalContent = (
		<article
			className={`
          ${type === "left" ? "justify-start" : "justify-center"}
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
      bg-neutral-800/20
          backdrop-blur-md
          p-2
      `}
			onClick={closeModal}
		>
			<div
				className={`
          justify-start 
          items-start 
          flex 
          flex-col
          ${theme === "dark" && "bg-slate-800"}
          ${theme === "light" && "bg-white"}
         ${type === "left" ? "h-full" : "h-auto"}
         ${type === "left" ? "w-96" : "w-auto"}
           pt-10
           relative
           rounded
      `}
				onClick={handleModalContainerClick}
			>
				<header
					className={`
            absolute
            top-0
            left-0
            w-full
            h-10
            ${color === 1 && "bg-amber-500"}
            rounded-t
            flex
             justify-end 
             p-3
        `}
				>
					<button
						className="
         
        "
						onClick={closeModal}
					>
						<FontAwesomeIcon className="text-white w-3" icon={faXmark} />
					</button>
				</header>
				{children}
			</div>
		</article>
	);

	return ReactDOM.createPortal(
		modalContent,
		document.getElementById("modal-root")!,
	);
}
