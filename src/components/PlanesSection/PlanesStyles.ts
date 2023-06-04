import styled from "styled-components";
import {
	orange_dark,
	orange_light,
	orange_lighter,
	orange_primary,
	purple_dark,
	purple_primary,
} from "../../theme";

export const PlanesContainer = styled.div`
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: #fff;

	@media screen and (max-width: 1000px) {
		height: 1280px;
	}

	@media screen and (max-width: 768px) {
		height: 1780px;
	}

	@media screen and (max-width: 480px) {
		height: 1700px;
	}
`;

export const PlanesH1 = styled.h1`
	font-size: 48px;
	color: ${purple_dark};
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const PlanesWraper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const PlanCard = styled.div`
	background: ${orange_lighter};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	border-radius: 10px;
	padding: 1rem;
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	transition: all 0.2s ease-in-out;
	border: 2px solid ${orange_light};
	height: 470px;

	&:hover {
		transform: scale(1.05);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	@media screen and (max-width: 768px) {
		padding: 30px;
	}
`;

export const PlanCardTitle = styled.h2`
	padding-bottom: 1rem;
	padding-top: 1rem;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 700;
	text-align: center;
	color: ${purple_dark};
`;

export const PlanCardPrice = styled.p`
	font-size: 2.25rem;
	line-height: 2.5rem;
	font-weight: 700;
	text-align: center;
	color: ${purple_dark};
`;

export const PlanCardBenefitsWraper = styled.div`
	font-weight: 500;
	text-align: start;
	color: ${purple_primary};
`;

export const TextPeriod = styled.span`
	font-size: 1rem;
`;

export const MainBenefit = styled.p`
	font-size: 0.9rem;
	margin-left: 2rem;
	margin-right: 2rem;
	margin-top: 1.5rem;
	border-bottom-width: 1px;
`;

export const Benefit = styled.p`
	font-size: 0.9rem;
	padding-top: 0.5rem;
	margin-left: 2rem;
	margin-right: 2rem;
	border-bottom-width: 1px;
`;

export const PlanCardButton = styled.a`
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: 1.5rem;

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
	}
`;
