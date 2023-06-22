import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	TopLine,
	Column1,
	TextWrapper,
	Subtitle,
	Heading,
	Column2,
	ImgWrap,
	Img,
	BtnWrap,
	DownloadStoreButton,
	DownloadStoreButtonSubtitle,
	DownloadStoreButtonTitle,
} from "./DowloadStyles";
import downladImg from "../../assets/images/undraw_download_re_li50.svg";

function DownloadSection() {
	return (
		<>
			<InfoContainer id="obten_app">
				<InfoWrapper>
					<InfoRow>
						<Column1>
							<TextWrapper>
								<TopLine>Continúa la experiencia</TopLine>
								<Heading>Baja la app y empieza a ahorrar</Heading>
								<Subtitle>
									Dónde sea y el cualquier momento. Disponible para dispositivos
									Android & iOS
								</Subtitle>
								<BtnWrap>
									{/* PLAY STORE */}
									<DownloadStoreButton 
										brand="play_store" 
										href="https://www.figma.com/proto/qRtqZHHgJH4HvIJF5Ybcl3/TP-IHC?type=design&node-id=402-400&scaling=min-zoom&page-id=395%3A99&starting-point-node-id=402%3A400"
										target="_blank"
									>
										<DownloadStoreButtonSubtitle>
											Descargar en
										</DownloadStoreButtonSubtitle>
										<DownloadStoreButtonTitle>
											Play Store
										</DownloadStoreButtonTitle>
									</DownloadStoreButton>

									{/* APP STORE */}
									<DownloadStoreButton 
										brand="app_store" 
										href="https://www.figma.com/proto/yAOLEKlSymoCWs4mMTjbdh/TF-IHC---Finanzia-AorraP?type=design&node-id=60-403&scaling=scale-down&page-id=46%3A55&starting-point-node-id=60%3A403&show-proto-sidebar=1"
										target="_blank"
									>
										<DownloadStoreButtonSubtitle>
											Descargar en
										</DownloadStoreButtonSubtitle>
										<DownloadStoreButtonTitle>
											App Store
										</DownloadStoreButtonTitle>
									</DownloadStoreButton>
								</BtnWrap>
							</TextWrapper>
						</Column1>
						<Column2>
							<ImgWrap>
								<Img src={downladImg} loading="lazy" alt="download" />
							</ImgWrap>
						</Column2>
					</InfoRow>
				</InfoWrapper>
			</InfoContainer>
		</>
	);
}

export default DownloadSection;
