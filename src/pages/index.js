import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { colors } from "../styles/theme";

export default function Home() {
	return (
		<>
			<Head>
				<title>devter 🐦</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<AppLayout>
				<section>
					<img src="/devtter-logo.png" alt="Logo" />
					<h1>Devtter</h1>
					<h2>
						Talk about development
						<br />
						with developers 👩‍💻👨‍💻
					</h2>
				</section>
			</AppLayout>
		</>
	);
}
