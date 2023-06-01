import AppLayout from "@/components/AppLayout";
import Avatar from "@/components/Avatar";
import {useEffect, useState} from "react";

export default function Homepage() {
	const [timeline, setTimeline] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3000/api/statuses/home_timeline")
			.then(res => res.json())
			.then(setTimeline);
	}, []);
	return (
		<>
			<AppLayout>
				<header>
					<h2>Inicio</h2>
				</header>
				<section>
					{timeline.map(devit => {
						return (
							<article key={devit.id}>
								<Avatar
									alt={devit.userName}
									src={devit.avatar}
								/>
							</article>
						);
					})}
				</section>
				<nav>Down</nav>
			</AppLayout>
			<style jsx>{`
				header {
					align-items: center;
					top: 0;
					height: 49px;
					display: flex;
					position: fixed;
					border-bottom: 1px solid #ccc;
					width: 100%;
				}

				h2 {
					font-size: 21px;
					font-weight: 800;
				}

				nav {
					display: flex;
					bottom: 0;
					position: fixed;
					border-top: 1px solid #ccc;
					height: 49px;
					width: 100%;
				}

				section {
					padding-top: 100px;
				}
			`}</style>
		</>
	);
}
