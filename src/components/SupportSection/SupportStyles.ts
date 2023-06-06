import styled from "styled-components";
import { orange_light, orange_primary, purple_dark } from "../../theme";

export const SupportTitle = styled.h1`
	margin: 50px 0 30px;
	text-align: center;
	color: ${purple_dark};
`;

export const SupportFaqContainer = styled.div`
	margin: 0 auto;
	max-width: 600px;
`;

export const SupportFaq = styled.div`
	background-color: transparent;
	border: 1px solid ${orange_primary};
	border-radius: 10px;
	padding: 30px;
	position: relative;
	overflow: hidden;
	margin: 20px 0;
	transition: 0.3s ease;

	@media screen and (max-width: 480px) {
		margin-left: 1rem;
		margin-right: 1rem;
	}
`;

export const SupportFaqTitle = styled.h3`
	margin: 0 35px 0 0;
	color: ${purple_dark};
`;

export const SupportFaqText = styled.p`
	display: none;
	margin: 30px 0 0;
	display: block; //bloque
`;

export const SupportFaqToggle = styled.button`
	background-color: transparent;
	border: none;
	border-radius: 50%;
	color: #fff;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 16px;
	padding: 0;
	position: absolute;
	top: 30px;
	right: 30px;
	height: 30px;
	width: 30px;

	&:hover {
		outline: none;
		background-color: ${orange_light};
	}

	background-color: ${orange_primary};
`;

export const SupportFlotingButton = styled.button`
	border-radius: 26.5px;
	background-color: ${orange_primary};
	box-shadow: 0 16px 22px -17px #03153b;
	border: none;
	color: #fff;
	cursor: pointer;
	font-size: 16px;
	line-height: 20px;
	padding: 12px 20px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	z-index: 999;
	font-weight: 600;
	:hover {
		background-color: ${orange_light};
	}
`;
