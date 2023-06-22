import styled from "styled-components";
import {
	orange_dark,
	orange_primary,
	purple_dark,
	purple_kight,
} from "../../theme";

export const ContactContainer = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 4rem;
	padding-bottom: 4rem;
	color: #ffffff;
	background: #ffffff;
	width: 100%;
`;

export const ContactWraper = styled.div`
	display: grid;
	margin-left: auto;
	margin-right: auto;

	@media (min-width: 1024px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
`;

export const ContactColumn = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-left: 3rem;
	margin-right: 3rem;
`;

export const ContactH1 = styled.div`
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 700;
	color: ${purple_dark};

	@media (min-width: 640px) {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}
	@media (min-width: 768px) {
		font-size: 2.25rem;
		line-height: 2.5rem;
	}
`;

export const ContactColumn2 = styled.div`
	margin-top: 1rem;
	margin-bottom: 1rem;
	margin-right: 3rem;
	margin-left: 3rem;
`;

export const ContactP = styled.p`
	color: ${purple_dark};
`;

export const InputWraper = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	@media (min-width: 640px) {
		flex-direction: row;
	}
`;

export const Input = styled.input`
	display: flex;
	padding: 0.75rem;
	color: ${purple_dark};
	width: 100%;
	border-radius: 0.375rem;
	border-color: ${orange_primary};
	border-style: solid;

	&:focus {
		outline: none !important;
		border: 2px solid ${orange_dark};
	}
`;

export const ContactButton = styled.button`
	padding-top: 0.75rem;
	padding-bottom: 0.75rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	margin-top: 1.5rem;
	margin-bottom: 1.5rem;
	margin-left: 1rem;
	color: #fff;

	border-radius: 50px;
	background: ${purple_dark};
	white-space: nowrap;
	padding: 10px 22px;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	font-weight: bold;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${purple_kight};
	}
`;
