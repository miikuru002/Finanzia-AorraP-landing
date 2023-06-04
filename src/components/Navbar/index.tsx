import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavBtn,
	NavBtnLink,
} from "./NavbarStyles";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo_white from "../../assets/images/logo_white.png";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarLink,
	SidebarMenu,
	SidebarBtnWrap,
	SidebarRoute,
} from "./MobileMenuStyles";

//arreglo de links
const navItems = [
	{
		title: "Conócenos",
		href: "conocenos",
	},
	{
		title: "Servicios",
		href: "servicios",
	},
	{
		title: "Planes",
		href: "planes",
	},
	{
		title: "Descargar",
		href: "obten_app",
	},
];

interface INavbarProps {
	isOpen: boolean;
	toggle: () => void;
}
function Navbar(props: INavbarProps) {
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo href="#">
							<img
								src={logo_white}
								alt="logo"
								loading="lazy"
								style={{
									width: "10rem",
								}}
							/>
						</NavLogo>
						<MobileIcon onClick={props.toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							{navItems.map((item, index) => {
								return (
									<NavItem key={index}>
										<NavLinks
											to={item.href}
											smooth
											duration={500}
											spy
											offset={-80}
										>
											{item.title}
										</NavLinks>
									</NavItem>
								);
							})}
						</NavMenu>
						<NavBtn>
							{/* <NavBtnLink
								to={{ pathname: "https://www.google.com" }}
								target="_blank"
							>
								Sign in
							</NavBtnLink> */}
							<NavBtnLink
								to={"obten_app"}
								smooth
								duration={500}
								spy
								offset={-80}
							>
								Obtener
							</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>

				{/* MENU PARA MOVILES */}
				<SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
					<Icon onClick={props.toggle}>
						<CloseIcon />
					</Icon>
					<SidebarWrapper>
						<SidebarMenu>
							{navItems.map((item, index) => {
								return (
									<SidebarLink
										to={item.href}
										onClick={props.toggle}
										key={index}
									>
										{item.title}
									</SidebarLink>
								);
							})}
						</SidebarMenu>
						<SidebarBtnWrap>
							<SidebarRoute
								to={"obten_app"}
								onClick={props.toggle}
							>
								Obtener
							</SidebarRoute>
						</SidebarBtnWrap>
					</SidebarWrapper>
				</SidebarContainer>
			</IconContext.Provider>
		</>
	);
}

export default Navbar;
