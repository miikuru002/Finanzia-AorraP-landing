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
					<InputWraper
						onSubmit={(e) => {
							e.preventDefault();
							alert(`✅ Información enviada a: ${(e.target as any).email.value}`);
						}}
					>
						<Input
							type="email"
							placeholder="Ingrese su email"
							required
							name="email"
						/>
						<ContactButton type="submit">Enviar</ContactButton>
					</InputWraper>
				</ContactColumn2>
			</ContactWraper>
		</ContactContainer>
	);
}

export default ContactSection;