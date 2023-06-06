import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	TextWrapper,
	Subtitle,
	Heading,
	Column2,
} from "./ConocenosStyles";

function Conocenos() {
	return (
		<>
			<InfoContainer id="conocenos">
				<InfoWrapper>
					<InfoRow>
						<Column1>
							<TextWrapper>
								<Heading>Nosotros</Heading>
								<Subtitle>
									Somos una startup enfocada en el desarrollo de tecnologías que
									solucionen problemáticas económicas presentes en nuestra
									sociedad
								</Subtitle>
							</TextWrapper>
						</Column1>

						<Column2>
							<TextWrapper>
								<Heading>Nuestro sueño</Heading>
								<Subtitle>
									Ser un aliado clave en el crecimiento económico de nuestros
									clientes, brindándoles servicios que les permitan gestionar
									eficientemente sus finanzas
								</Subtitle>
							</TextWrapper>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
}

export default Conocenos;
