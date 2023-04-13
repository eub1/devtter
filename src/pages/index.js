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
					<img src="/favicon.ico" alt="Logo" />
					<h1>Devtter</h1>
					<h2>
						Talk about development
						<br />
						with developers 👩‍💻👨‍💻
					</h2>
				</section>
			</AppLayout>
			<style jsx>
				{`
					img {
						width: 80px;
					}
					section {
						display: grid;
						height: 100%;
						place-content: center;
						place-items: center;
					}
					h1 {
						color: ${colors.primary};
						font-weight: 700;
						margin-bottom: 8px;
					}
					h2 {
						color: ${colors.secondary};
						font-size: 18px;
						margin: 0;
					}
				`}
			</style>
		</>
	);
}
