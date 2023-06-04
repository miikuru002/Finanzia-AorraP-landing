import {
	Benefit,
	MainBenefit,
	PlanCard,
	PlanCardBenefitsWraper,
	PlanCardButton,
	PlanCardPrice,
	PlanCardTitle,
	PlanesContainer,
	PlanesH1,
	PlanesWraper,
	TextPeriod,
} from "./PlanesStyles";

const planData = [
	{
		title: "Free",
		price: "$0",
		time: "",
		benefits: [
			"✔ Manejar ingresos y gastos",
			"✔ Gestión de presupuestos y objetivos",
			"✔ Alertas y recordatorios",
			"✔ Hasta 2 dispositivos",
		],
	},
	{
		title: "Premium Mensual",
		price: "$4.99",
		time: "x mes",
		benefits: [
			"✔ Todo lo anterior",
			"✔ Integración con cuentas bancarias",
			"✔ Ofertas inteligentes",
			"✔ Hasta 5 dispositivos",
			"✔ Sin anuncios",
			"✔ Acceso ilimitado a herramientas inteligentes",
		],
	},
	{
		title: "Premium Anual",
		price: "$34.99",
		time: "x año",
		benefits: [
			"✔ Todo lo anterior",
			"✔ Hasta 10 dispositivos",
		],

	},
];

function PlanesSection() {
	return (
		<PlanesContainer id="planes">
			<PlanesH1>Planes disponibles</PlanesH1>
			<PlanesWraper>
				{planData.map((item, index) => {
					return (
						<PlanCard key={index}>
							<PlanCardTitle>{item.title}</PlanCardTitle>
							<PlanCardPrice>
								{item.price}
								<TextPeriod>{item.time}</TextPeriod>
							</PlanCardPrice>
							{/* ITERA EN EL ARRAY DE BENEFICIOS PARA LISTARLOS */}
							{item.benefits.map((benefit, i) => {
								return (
									<PlanCardBenefitsWraper key={i}>
										{/* SI ES EL PRIMER ITEM ENTONCES LO RENDERIZA EN MainBenefit, sino en Benefit*/}
										{i === 0 ? (
											<MainBenefit>{benefit}</MainBenefit>
										) : (
											<Benefit>{benefit}</Benefit>
										)}
									</PlanCardBenefitsWraper>
								);
							})}
							<PlanCardButton>Comprar</PlanCardButton>
						</PlanCard>
					);
				})}
			</PlanesWraper>
		</PlanesContainer>
	);
}

export default PlanesSection;
