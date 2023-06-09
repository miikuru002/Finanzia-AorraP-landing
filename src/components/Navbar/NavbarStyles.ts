import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { orange_dark, orange_lighter, orange_primary, purple_primary } from "../../theme";

export const Nav = styled.nav`
	background: ${purple_primary};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const NavLogo = styled.a`
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: #fff;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	font-weight: 400;
	font-size: large;

	&.active {
		border-bottom: 5px solid ${orange_primary};
		font-size: larger;
		font-weight: 700;
		color: ${orange_lighter}
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

//export const NavBtnLink = styled(LinkRouter)`
export const NavBtnLink = styled(LinkScroll)`
	border-radius: 50px;
	background: ${orange_primary};
	white-space: nowrap;
	padding: 10px 22px;
	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	font-weight: bold;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${orange_dark};
		color: #fff;
	}
`;
