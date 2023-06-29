/* eslint-disable quotes */
import styled from "styled-components";
import { purple_dark } from "../../theme";

export const InfoContainer = styled.div`
	color: #fff;
	background: '#f9f9f9';

	@media screen and (max-width: 768px) {
		padding: 100px 0;
	}
`;

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 660px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: 'col1 col2';

	@media screen and (max-width: 768px) {
		grid-template-areas: 'col2' 'col1';
	}
`;

export const Column1 = styled.div`
	/* margin-bottom: 15px; */
	padding: 0 15px;
	grid-area: col1;
`;

export const Column2 = styled.div`
	/* margin-bottom: 15px; */
	padding: 0 15px;
	grid-area: col2;
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	/* padding-bottom: 60px; */
`;

export const VideoWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: bold;
	color: ${purple_dark};

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

export const Subtitle = styled.p`
	max-width: 440px;
	/* margin-bottom: 35px; */
	font-size: 18px;
	line-height: 24px;
	color: ${purple_dark};
`;

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`;
