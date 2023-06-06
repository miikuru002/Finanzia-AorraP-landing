import { FaExternalLinkAlt } from "react-icons/fa";
import {
	SupportFaq,
	SupportFaqContainer,
	SupportFaqText,
	SupportFaqTitle,
	SupportFaqToggle,
	SupportFlotingButton,
	SupportTitle,
} from "./SupportStyles";

function SupportSection() {
	return (
		<>
			<SupportTitle>Soporte y FAQs</SupportTitle>

			<SupportFaqContainer>
				<SupportFaq>
					<SupportFaqTitle>Aprender a crear un presupuesto</SupportFaqTitle>
					<SupportFaqText>
						En la app, en el menú de inicio encontrarás el apartado de presupuesto
					</SupportFaqText>
					<SupportFaqToggle>
						<FaExternalLinkAlt />
					</SupportFaqToggle>
				</SupportFaq>

				<SupportFaq>
					<SupportFaqTitle>¿Cómo borrar presupuesto?</SupportFaqTitle>
					<SupportFaqText>
						En la app, dentro de la ventana presupuestos podrás encontrar el
						ícono de un tacho de basura con el que podrás borrar presupuestos
						creados
					</SupportFaqText>
					<SupportFaqToggle>
						<FaExternalLinkAlt />
					</SupportFaqToggle>
				</SupportFaq>

				<SupportFaq>
					<SupportFaqTitle>
						¿Cómo borrar mi cuenta?
					</SupportFaqTitle>
					<SupportFaqText>Escribe un mensaje a soporte indicando el motivo y el nombre de la solicitud</SupportFaqText>
					<SupportFaqToggle>
						<FaExternalLinkAlt />
					</SupportFaqToggle>
				</SupportFaq>
			</SupportFaqContainer>

			{/* BOTON FLOTANTE */}
			<SupportFlotingButton>Contactar con soporte</SupportFlotingButton>
		</>
	);
}
export default SupportSection;
