import {
	HeroContainer,
	HeroWrapper,
	HeroRow,
	TextWrapper,
	Subtitle,
	Heading,
	ImgWrap,
	Img,
	BtnWrap,
	Column,
	OrangeText,
	MediumText,
	Button
} from "./HeroStyles";
import image1 from "../../assets/images/img1.png";

function HeroSection() {
	return (
		<>
			<HeroContainer id="#">
				<HeroWrapper>
					<HeroRow>
						<Column gridArea="col1">
							<ImgWrap>
								<Img src={image1} loading="lazy" alt="imagen" />
							</ImgWrap>
						</Column>

						<Column gridArea="col2">
							<TextWrapper>
								<Heading>
									Haz realidad <br /> <OrangeText>tus sueños</OrangeText>,
									<br />
									<MediumText>controla tus finanzas y <br /> alcanza tus metas</MediumText>
								</Heading>
								<Subtitle>
									Te ofrecemos herramientas y funciones fáciles de usar para
									gestionar tus finanzas de manera eficiente.
								</Subtitle>
								<BtnWrap>
									<Button to="contacto" smooth duration={500} spy offset={-80}>
										Más información
									</Button>
								</BtnWrap>
							</TextWrapper>
						</Column>
					</HeroRow>
				</HeroWrapper>
			</HeroContainer>
		</>
	);
}

export default HeroSection;
