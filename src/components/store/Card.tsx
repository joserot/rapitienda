import Image from "next/image";
import CardTags from "./CardTags";
import Modal from "../common/Modal";
import useModal from "<src>/hooks/useModal";
import ModalProduct from "./ModalProduct";
import userContext from "<src>/context/userContext";
import { useContext } from "react";
import CardPrice from "./CardPrice";
import useTheme from "<src>/hooks/useTheme";

interface Props {
	product: Product;
}

export default function Card({ product }: Props) {
	const [isOpenProduct, openProduct, closeProduct] = useModal(false);
	const user = useContext(userContext);
	const { theme } = useTheme();

	return (
		<div>
			<Modal
				color={user.color}
				type="left"
				isOpen={isOpenProduct}
				closeModal={closeProduct}
			>
				<ModalProduct product={product} closeModal={closeProduct} />
			</Modal>
			<article
				onClick={openProduct}
				className={`
          w-full  
          h-auto
          ${theme === "dark" && "bg-slate-600"}
          ${theme === "dark" && "shadow-none"}
          cursor-pointer
          shadow-lg
          rounded
          hover:-translate-y-2
          transition-transform`}
			>
				<Image
					src={product.image ? product.image : "/placeholder.webp"}
					alt={product.name}
					width={500}
					height={500}
					className="object-cover rounded-t w-full h-72"
				/>
				<div className="p-3 flex flex-col gap-3 md:gap-8">
					<div>
						<h3
							className={`
                  font-semibold 
                  ${theme === "dark" && "text-white"}
                  text-lg 
                  capitalize`}
						>
							{product.name}
						</h3>
						{product.description && (
							<p
								className={`
                  ${theme === "dark" && "text-white"}
                  text-xs 
                  text-gray-500`}
							>
								{product.description}
							</p>
						)}
					</div>
					<CardTags tags={product.tags} />
					<CardPrice product={product} />
				</div>
			</article>
		</div>
	);
}
