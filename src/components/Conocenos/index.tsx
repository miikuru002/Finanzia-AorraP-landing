import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	TextWrapper,
	Subtitle,
	Heading,
	Column2,
	VideoWrapper,
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
							<br /> 
							<TextWrapper>
								<Heading>Nuestro sueño</Heading>
								<Subtitle>
									Ser un aliado clave en el crecimiento económico de nuestros
									clientes, brindándoles servicios que les permitan gestionar
									eficientemente sus finanzas
								</Subtitle>
							</TextWrapper>
							<br />
						</Column1>

						<Column2>
							<VideoWrapper>
								<iframe
									src="https://www.youtube.com/embed/4IdTfld_01I"
								></iframe>
							</VideoWrapper>
							<br /> 
							<VideoWrapper>
								<iframe
									src="https://www.youtube.com/embed/Sk6eHoQqoZM"
								></iframe>
							</VideoWrapper>
							<br />
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
}

export default Conocenos;
