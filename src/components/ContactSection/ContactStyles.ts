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