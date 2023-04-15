import { useEffect, useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { colors } from "../styles/theme";

import { loginWithGitHub, onAuthStateChanged } from "../firebase/client.js";
import Button from "@/components/Button";
import GitHub from "@/components/Icons/GitHub";
import Avatar from "@/components/Avatar";
import Logo from "@/components/Icons/Logo";

export default function Home() {
	const [user, setUser] = useState(null);
	// console.log(user);

	// cdo se monta el componente, mira si tiene sesion el usuario
	useEffect(() => {
		onAuthStateChanged(setUser);
	}, []);

	const handleClick = () => {
		loginWithGitHub()
			.then((user) => {
				const { avatar, userName, url, email } = user;
				setUser(user);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<Head>
				<title>devter 🐦</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<AppLayout>
				<section>
					<Logo />
					<h1>Devtter</h1>
					<h2>
						Talk about development
						<br />
						with developers 👩‍💻👨‍💻
					</h2>
					<div>
						{user === null && (
							<Button onClick={handleClick}>
								<GitHub fill='white' />
								Login with Github
							</Button>
						)}
						{user && user.avatar && (
							<div>
								<Avatar
									alt={user.userName}
									src={user.avatar}
									text={user.userName}
									withText
								/>
							</div>
						)}
					</div>
				</section>
			</AppLayout>
			<style jsx>
				{`
					img {
						width: 80px;
					}
					div {
						margin-top: 8px;
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
