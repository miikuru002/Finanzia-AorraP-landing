import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";
import { orange_dark, orange_primary, purple_dark } from "../../theme";

interface ISidebarContainerProps {
	isOpen: boolean;
}
export const SidebarContainer = styled.aside<ISidebarContainerProps>`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: ${purple_dark};
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "98%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
	color: #fff;
`;

export const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	background: transparent;
	font-size: 2rem;
	cursor: pointer;
	outline: none;
`;

export const SidebarWrapper = styled.div`
	color: #fff;
`;

export const SidebarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(5, 60px);
	}
`;

export const SidebarLink = styled(LinkScroll)`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-in-out;
	text-decoration: none;
	color: #fff;
	font-weight: 600;
	cursor: pointer;

	&:hover {
		color: ${orange_dark};
		transition: 0.2s ease-in-out;
	}
`;

export const SidebarBtnWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const SidebarRoute = styled(LinkScroll)`
	border-radius: 50px;
	background: ${orange_primary};
	white-space: nowrap;
	padding: 16px 64px;
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
		background: #fff;
		color: #010606;
	}
`;
