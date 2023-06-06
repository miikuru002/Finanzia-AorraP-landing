import {
	ServicesContainer,
	ServicesH1,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesH2,
	ServicesP,
} from "./ServicesStyles";
import ReportImg from "../../assets/images/undraw_report_re_f5n5.svg";
import RecoratoriosImg from "../../assets/images/undraw_push_notifications_re_t84m.svg";
import FamiliaImg from "../../assets/images/undraw_family_vg76.svg";

const cardData = [
	{
		title: "Herramientas inteligentes",
		description: "¡Olvídate de anotar y hacer cálculos!, obtén informes periódicos de tus gastos, presupuestos personalizados y más herramientas inteligentes.",
		img: ReportImg,
		alt: "reportes"
	},
	{
		title: "Nunca te olvides de ahorrar",
		description: "Olvídate de moras, facturas o deudas vencidas. Con nuestro sistema de recordatorios y alertas te ayudaremos a organizarte y cuidar tu economía.",
		img: RecoratoriosImg,
		alt: "recordatorios"
	},
	{
		title: "Ahorra en familia",
		description: "Con funciones y ajustes especialmente diseñados para gestionar las finanzas con tu familia y/o seres queridos.",
		img: FamiliaImg,
		alt: "familia"
	},
];

function ServicesSection() {
	return (
		<ServicesContainer id="servicios">
			<ServicesH1>Nuestros Servicios</ServicesH1>
			<ServicesWrapper>
				{cardData.map((item, index) => {
					return (
						<ServicesCard key={index}>
							<ServicesIcon src={item.img} loading="lazy" alt={item.alt} />
							<ServicesH2>{item.title}</ServicesH2>
							<ServicesP>{item.description}</ServicesP>
						</ServicesCard>
					);
				})}
			</ServicesWrapper>
		</ServicesContainer>
	);
}

export default ServicesSection;
