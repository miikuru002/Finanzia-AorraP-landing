import {
	ContactButton,
	ContactColumn,
	ContactColumn2,
	ContactContainer,
	ContactH1,
	ContactP,
	ContactWraper,
	Input,
	InputWraper,
} from "./ContactStyles";

function ContactSection() {
	return (
		<ContactContainer id="contacto">
			<ContactWraper>
				<ContactColumn>
					<ContactH1>Solicita mayor información</ContactH1>
					<ContactP>Bríndanos tu correo para poder ayudarte.</ContactP>
				</ContactColumn>

				<ContactColumn2>
					<InputWraper>
						<Input type="email" placeholder="Ingrese su email" />
						<ContactButton>Enviar</ContactButton>
					</InputWraper>
					{/* <p>
						We care bout the protection of your data. Read our{" "}
						<TextColor>Privacy Policy.</TextColor>
					</p> */}
				</ContactColumn2>
			</ContactWraper>
		</ContactContainer>
	);
}

export default ContactSection;