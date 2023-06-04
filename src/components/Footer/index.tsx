import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import {
	FooterContainer,
	FooterWrap,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLink,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./FooterElements";

function Footer() {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Sobre nosotros</FooterLinkTitle>
							<FooterLink>Quiénes somos</FooterLink>
							<FooterLink>Términos de servicio</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>Contáctanos</FooterLinkTitle>
							<FooterLink>Medios de contacto</FooterLink>
							<FooterLink>Soporte</FooterLink>
							<FooterLink>Preguntas frecuentes</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo>
							Finanzia
						</SocialLogo>
						<WebsiteRights>
							Finanzia © {new Date().getFullYear()} Todos los derechos reservados.
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink aria-label="TikTok">
								<FaTiktok />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
}

export default Footer;
