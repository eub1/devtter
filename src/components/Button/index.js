import { colors } from "@/styles/theme";

export default function Button({ children, onClick }) {
	return (
		<>
			<button onClick={onClick}>{children}</button>
			<style jsx>
				{`
					button {
						align-items: center;
						background: ${colors.black};
						border: 0;
						color: #fff;
						cursor: pointer;
						display: flex;
						border-radius: 9999px;
						font-size: 16px;
						font-weight: 700;
						padding: 8px 24px;
						transition: opacity 0.3s ease;
					}
					 {
						/* si este boton, dentro tiene un svg, que tenga margen a la derecha
            > indica que sea de los primeros hijos, primer subnivel desde el padre, que no siga buscando mas abajo
            */
					}
					button > :global(svg) {
						margin-right: 8px;
					}
					button:hover {
						opacity: 0.7;
					}
				`}
			</style>
		</>
	);
}
