import styled from "styled-components";
import {
	orange_light,
	purple_primary,
	purple_dark,
	purple_kight,
} from "../../theme";
import { Link } from "react-scroll";

export const HeroContainer = styled.div`
	color: #fff;
	background: ${purple_primary};

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const HeroWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 760px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const HeroRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: "col1 col2";

	@media screen and (max-width: 768px) {
		grid-template-areas: "col2" "col1";
	}
`;

interface IColumnProps {
	gridArea: string;
}
export const Column = styled.div<IColumnProps>`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: ${({ gridArea }) => gridArea};
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 60px;
	line-height: 1.1;
	font-weight: bolder;
	color: "#f7f8fa";

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
	color: "#fff";
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

export const OrangeText = styled.span`
	color: ${orange_light};
`;

export const MediumText = styled.div`
	font-size: 30px;
`;

export const Button = styled(Link)`
	border-radius: 50px;
	background-color: ${purple_dark};
	white-space: nowrap;
	padding: 14px 48px;
	color: "#fff";
	font-size: "20px";
	outline: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	font-weight: bold;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${purple_kight};
	}
`;
