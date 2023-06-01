const timeline = [
	{
		id: "0",
		avatar: "./public/Avatar_LongHair_Lady.png",
		userName: "thisisJane",
		message: `Twitter Web App now runs ES6+ for modern browsers. reducing the polyfill bundle size by 83%`
	}
];
// Avatar_shortHair_Lady.png;
// Avatar_shortHair_Man.png;

export default (req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.send(JSON.stringify(timeline));
};
