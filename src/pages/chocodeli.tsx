import Layout from "<src>/components/common/Layout";
import Hero from "<src>/components/store/Hero";
import Content from "<src>/components/store/Content";
import Footer from "<src>/components/store/Footer";
import Cart from "<src>/components/store/Cart";
import Header from "<src>/components/store/Header";
import { UserProvider } from "<src>/context/userContext";
import { CartProvider } from "<src>/context/cartContext";
import { FiltersProvider } from "<src>/context/filtersContext";
import { GridProvider } from "<src>/context/gridContext";
import Head from "next/head";

export default function Profile() {
	return (
		<GridProvider>
			<FiltersProvider>
				<CartProvider>
					<UserProvider>
						<Layout>
							<>
								{/* <Head>
									<title>{user.username}</title>
									<meta name="description" content={user.description} />
									<link rel="shortcut icon" href={user.logo} />
								</Head> */}
								<div className="flex flex-col justify-center items-center">
									<Header />
									<Hero />
									<Content />
									<Cart />
									<Footer />
								</div>
							</>
						</Layout>
					</UserProvider>
				</CartProvider>
			</FiltersProvider>
		</GridProvider>
	);
}
