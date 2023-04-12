import Link from "next/link";

export default function Timeline({ userName }) {
	return (
		<>
			<h1>This is the timeline of {userName}</h1>
			<div>
				<Link href="/">Go Home</Link>
			</div>
			<style jsx>
				{"h1, div {align-item: center; color: #09f;}, {h1 {font-size: 36px;}}"}
			</style>
		</>
	);
}

Timeline.getInitialProps = () => {
	return fetch("http://localhost:3000/api/hello")
		.then((res) => res.json())
		.then((response) => {
			console.log(response);
			const { userName } = response;
			return { userName };
		});
};
